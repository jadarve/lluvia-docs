---
title: "Basic Concepts"
date: 2020-06-02T00:00:00-05:00
weight: 2
---

## The Session

The main object in a Lluvia is an instance of **Session**. Session objects hold a reference to the underlying GPU device used for instantiating memory and running nodes. A Session object lives for as long as their children, even if you lose its reference in your code.

```python
import lluvia as ll

session = ll.createSession()
```

## Memory

From a session, it is possible to create **Memory** objects used to allocate **Buffer** and **Image** objects. Buffers are raw portions of memory and can be used to store user definde types. Images, on the other hand, store pixel data in a given format. Memories can be *device-local*, i.e., allocated in the GPU internal memory, or *host-visible*, useful for transfer data from and to the GPU from the host machine (CPU).

```python
devMemory = session.createMemory(ll.MemoryPropertyFlagBits.DeviceLocal)

hostMemory = session.createMemory([ll.MemoryPropertyFlagBits.HostVisible,
                                   ll.MemoryPropertyFlagBits.HostCoherent])
```

## Buffers

Instances of **Buffer** hold a pointer to contiguous raw memory of a given size. Users can read and write own data within the buffer. Interpretation of the underlying bytes on both the CPU and GPU is left to the user.

```python
import numpy as np

# myBuffer will contain 1024 bytes
myBuffer = devMemory.createBuffer(1024)

asUint8 = myBuffer.toHost(dtype=np.uint8)     # interpreted as uint8
asFloat32 = myBuffer.toHost(dtype=np.float32) # interpreted as float32

print('uint8   : {0}'.format(asUint8.shape))
print('float32 : {0}'.format(asFloat32.shape))
```

The code above will print:

```
uint8   : (1024,)
float32 : (256,)
```

## Images and Image Views

Image objects, on the other hand, are areas of memory to store pixel data. The shape of the image (depth, height, width), as well as the channel type (uint8, int32, float32, etc) and the channel count (1 to 4) must be provided during creation.

```python
# 4 channels, 1920x1080 image. Color is encoded as uint8.
img = devMemory.createImage((1080, 1920, 4), ll.ChannelType.Uint8)

print('depth    : {0}'.format(img.depth))
print('height   : {0}'.format(img.height))
print('width    : {0}'.format(img.width))
print('channels : {0}'.format(img.channels))
```

The output is:

```
depth    : 1
height   : 1080
width    : 1920
channels : 4
```

To access the underlying pixels in the GPU, we need to use an **ImageView** that includes information as sampling method (nearest, linear), padding and coordinate system (normalized or not). The code below will create an image view that access the pixel using *Nearest* interpoaltion, repeats the border pixels in case of coordinates outside the boundaries, uses unnormalized coordinates in the range *x in [0, 1920)* and *y in [0, 1080)* and, finally, no GPU sampler is used.



```python
imgView = img.createImageView(ll.ImageFilterMode.Nearest,
                              ll.ImageAddressMode.Repeat,
                              normalizedCoordinates=False,
                              sampled=False)
```

## The Compute Node

Compute nodes are the building block for creating complex graphs. An instance of the **ComputeNode** class holds information for running a program on the GPU. This information includes: the program (a compiled GLSL shader), inputs and outputs, and dispatch information (grid and local shapes). Here is a fully working example to compute the square of an array of 8 elements:

```python
import lluvia as ll
import numpy as np

glsl = """
#version 450

// boiler plate for assigning local grid shape
layout (
    local_size_x_id = 1, local_size_x = 1,
    local_size_y_id = 2, local_size_y = 1,
    local_size_z_id = 3, local_size_z = 1
) in;

// the binding numbers here are associated with the
// ports declared in desc.addPort(...)
layout(binding = 0) buffer in_0  {float in_buffer[];};
layout(binding = 1) buffer out_0 {float out_buffer[];};

void main() {

    const uint index = gl_GlobalInvocationID.x;
    
    out_buffer[index] = in_buffer[index] * in_buffer[index];
}
"""

# number of elements
N = 8

session = ll.createSession()

# buffers will be allocated in the GPU
devMemory = session.createMemory(ll.MemoryPropertyFlagBits.DeviceLocal)

in_buffer = devMemory.createBuffer(N*4)
in_buffer.fromHost(np.arange(0, N, dtype=np.float32)) # initialize with some values

out_buffer = devMemory.createBuffer(N*4)

# compile the GLSL code above into a Program object
program = session.compileProgram(glsl)

# all parameters for creating a ComputeNode are stored in a ComputeNodeDescriptor
desc = ll.ComputeNodeDescriptor()
desc.program = program
desc.functionName = 'main'
desc.grid = (1, 1, 1)
desc.local = (N, 1, 1)
desc.addPort(ll.PortDescriptor(0, 'in_buffer', ll.PortDirection.In, ll.PortType.Buffer))
desc.addPort(ll.PortDescriptor(1, 'out_buffer', ll.PortDirection.Out, ll.PortType.Buffer))

# creates the compute node, binds its input and outputs 
# to the memory buffers and initialize it
node = session.createComputeNode(desc)
node.bind('in_buffer', in_buffer)
node.bind('out_buffer', out_buffer)
node.init()

# run it on the GPU
node.run()

print(in_buffer.toHost(dtype=np.float32))
print(out_buffer.toHost(dtype=np.float32))
```

The output is:

```
[ 0.  1.  2.  3.  4.  5.  6.  7.]
[  0.   1.   4.   9.  16.  25.  36.  49.]
```

## Scripting

The code above, while functional, is not portable to a more performant language such as C++. Python is good for prototyping purposes, but real-time applications often require software in low-level languages. To save you the headache of writing the same configuration code twice in two different programming languages, Lluvia offers a Lua scripting interface in which you can write the configuration of your node once and run it in any languaje.

Consider you have the code of your shader in a GLSL file `Square.comp`.

```glsl
#version 450

// boiler plate for assigning local grid shape
layout (
    local_size_x_id = 1, local_size_x = 1,
    local_size_y_id = 2, local_size_y = 1,
    local_size_z_id = 3, local_size_z = 1
) in;

// the binding numbers here are associated with the
// values provided in desc.addPort(...)
layout(binding = 0) buffer in_0  {float in_buffer[];};
layout(binding = 1) buffer out_0 {float out_buffer[];};

void main() {

    const uint index = gl_GlobalInvocationID.x;
    
    out_buffer[index] = in_buffer[index] * in_buffer[index];
}
```

The shader is compiled to SPIR-V `Square.spv` using

```bash
glslc -o Square.spv Square.comp
```

To use that shader, we need:

* Associate the program to the compute node.
* declare the inputs and outputs.
* Instantiate and bind the output buffer.
* Configure the dispatch information.

The Lua script below does exactly that. It declares a builder with all the information needed to create a node (`builder.newDescriptor()` function) and later initialize it (`builder.onNodeInit()` function). Notice how the `out_buffer` is instantiated during the node initialization using `in_buffer.size`, thus eliminating the need of manual instantiation of outputs in the host language (Python, C++).

```lua
local builder = ll.class(ll.ComputeNodeBuilder)

function builder.newDescriptor() 
    
    local desc = ll.ComputeNodeDescriptor.new()
    
    desc.builderName  = 'Square'
    desc.localShape   = ll.vec3ui.new(32, 32, 1)
    desc.gridShape    = ll.vec3ui.new(1, 1, 1)

    -- retrieves the program from the session's program registry
    desc.program      = ll.getProgram('Square')
    desc.functionName = 'main'

    desc:addPort(ll.PortDescriptor.new(0, 'in_buffer', ll.PortDirection.In, ll.PortType.Buffer))
    desc:addPort(ll.PortDescriptor.new(1, 'out_buffer', ll.PortDirection.Out, ll.PortType.Buffer))

    return desc
end

function builder.onNodeInit(node)
    
    local in_buffer = node:getPort('in_buffer')

    -- Allocate out_buffer in the same Memory as in_buffer
    local memory = in_buffer.memory
    
    local out_buffer = memory:createBuffer(in_buffer.size)
    
    -- bind the output
    node:bind('out_buffer', out_buffer)
    
    -- configure the dispath shapes according to the size of in_buffer
    node:configureGridShape(ll.vec3ui.new(in_buffer.size // 4, 1, 1))

end

ll.registerNodeBuilder('Square', builder)
```

Save the Lua script to `Square.lua`. Running the node in Python becomes:

```python
import lluvia as ll
import numpy as np

# number of elements
N = 8

session = ll.createSession()

# buffers will be allocated in the GPU
devMemory = session.createMemory(ll.MemoryPropertyFlagBits.DeviceLocal)

in_buffer = devMemory.createBuffer(N*4)
in_buffer.fromHost(np.arange(0, N, dtype=np.float32)) # initialize with some values

# Loads the SPIR-V program and makes it available as 'Square'
session.setProgram('Square', 'Square.spv')

# Runs the lua script declaring the builder, also named 'Square'
session.scriptFile('Square.lua')

node = session.createComputeNode('Square')
node.bind('in_buffer', in_buffer)
node.init()

node.run()

out_buffer = node.getPort('out_buffer')

print(in_buffer.toHost(dtype=np.float32))
print(out_buffer.toHost(dtype=np.float32))
```

The two files, `Square.spv` and `Square.lua`, fully describe the instantiation and initialization of the *Square* compute node. Those files can be ported across language as well as across platform without ever changing them. This portability, I believe, is fundamental to move code from a prototyping environment to deployment in production.

## Node Composition

**TODO**
