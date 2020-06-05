Search.setIndex({docnames:["classes/Buffer","classes/CommandBuffer","classes/ComputeNode","classes/ComputeNodeDescriptor","classes/ContainerNode","classes/ContainerNodeDescriptor","classes/Duration","classes/Image","classes/ImageView","classes/Memory","classes/MemoryAllocationInfo","classes/Parameter","classes/PortDescriptor","classes/Program","classes/Session","classes/index","enumerations/index","index","modules/core","modules/index","modules/util"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":2,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,sphinx:56},filenames:["classes/Buffer.rst","classes/CommandBuffer.rst","classes/ComputeNode.rst","classes/ComputeNodeDescriptor.rst","classes/ContainerNode.rst","classes/ContainerNodeDescriptor.rst","classes/Duration.rst","classes/Image.rst","classes/ImageView.rst","classes/Memory.rst","classes/MemoryAllocationInfo.rst","classes/Parameter.rst","classes/PortDescriptor.rst","classes/Program.rst","classes/Session.rst","classes/index.rst","enumerations/index.rst","index.rst","modules/core.rst","modules/index.rst","modules/util.rst"],objects:{"lluvia.core":{Buffer:[0,1,1,""],BufferUsageFlagBits:[16,1,1,""],ChannelCount:[16,1,1,""],ChannelType:[16,1,1,""],CommandBuffer:[1,1,1,""],ComputeNode:[2,1,1,""],ComputeNodeDescriptor:[3,1,1,""],ContainerNode:[4,1,1,""],ContainerNodeDescriptor:[5,1,1,""],Duration:[6,1,1,""],Format:[16,1,1,""],Image:[7,1,1,""],ImageAddressMode:[16,1,1,""],ImageAxis:[16,1,1,""],ImageFilterMode:[16,1,1,""],ImageLayout:[16,1,1,""],ImageTiling:[16,1,1,""],ImageType:[16,1,1,""],ImageUsageFlagBits:[16,1,1,""],ImageView:[8,1,1,""],Memory:[9,1,1,""],MemoryAllocationInfo:[10,1,1,""],MemoryPropertyFlagBits:[16,1,1,""],NodeState:[16,1,1,""],NodeType:[16,1,1,""],Parameter:[11,1,1,""],ParameterType:[16,1,1,""],PortDescriptor:[12,1,1,""],PortDirection:[16,1,1,""],PortType:[16,1,1,""],Program:[13,1,1,""],Session:[14,1,1,""],createSession:[18,3,1,""]},"lluvia.core.Buffer":{allocationInfo:[0,2,1,""],copy:[0,3,1,""],fromHost:[0,3,1,""],isMappable:[0,2,1,""],memory:[0,2,1,""],session:[0,2,1,""],size:[0,2,1,""],toHost:[0,3,1,""],usageFlags:[0,2,1,""]},"lluvia.core.BufferUsageFlagBits":{IndexBuffer:[16,2,1,""],IndirectBuffer:[16,2,1,""],StorageBuffer:[16,2,1,""],StorageTexelBuffer:[16,2,1,""],TransferDst:[16,2,1,""],TransferSrc:[16,2,1,""],UniformBuffer:[16,2,1,""],UniformTexelBuffer:[16,2,1,""],VertexBuffer:[16,2,1,""]},"lluvia.core.ChannelCount":{C1:[16,2,1,""],C2:[16,2,1,""],C3:[16,2,1,""],C4:[16,2,1,""]},"lluvia.core.ChannelType":{Float16:[16,2,1,""],Float32:[16,2,1,""],Float64:[16,2,1,""],Int16:[16,2,1,""],Int32:[16,2,1,""],Int64:[16,2,1,""],Int8:[16,2,1,""],Uint16:[16,2,1,""],Uint32:[16,2,1,""],Uint64:[16,2,1,""],Uint8:[16,2,1,""]},"lluvia.core.CommandBuffer":{begin:[1,3,1,""],changeImageLayout:[1,3,1,""],clearImage:[1,3,1,""],copyBuffer:[1,3,1,""],copyBufferToImage:[1,3,1,""],copyImageToBuffer:[1,3,1,""],copyImageToImage:[1,3,1,""],durationEnd:[1,3,1,""],durationStart:[1,3,1,""],end:[1,3,1,""],memoryBarrier:[1,3,1,""],run:[1,3,1,""],session:[1,2,1,""]},"lluvia.core.ComputeNode":{bind:[2,3,1,""],getParameter:[2,3,1,""],getPort:[2,3,1,""],grid:[2,2,1,""],gridX:[2,2,1,""],gridY:[2,2,1,""],gridZ:[2,2,1,""],init:[2,3,1,""],local:[2,2,1,""],localX:[2,2,1,""],localY:[2,2,1,""],localZ:[2,2,1,""],record:[2,3,1,""],run:[2,3,1,""],session:[2,2,1,""],setParameter:[2,3,1,""],type:[2,2,1,""]},"lluvia.core.ComputeNodeDescriptor":{addPort:[3,3,1,""],builderName:[3,2,1,""],functionName:[3,2,1,""],getParameter:[3,3,1,""],getPort:[3,3,1,""],grid:[3,2,1,""],gridX:[3,2,1,""],gridY:[3,2,1,""],gridZ:[3,2,1,""],local:[3,2,1,""],localX:[3,2,1,""],localY:[3,2,1,""],localZ:[3,2,1,""],program:[3,2,1,""],setParameter:[3,3,1,""]},"lluvia.core.ContainerNode":{bind:[4,3,1,""],bindNode:[4,3,1,""],getNode:[4,3,1,""],getParameter:[4,3,1,""],getPort:[4,3,1,""],init:[4,3,1,""],record:[4,3,1,""],run:[4,3,1,""],session:[4,2,1,""],setParameter:[4,3,1,""],type:[4,2,1,""]},"lluvia.core.ContainerNodeDescriptor":{addPort:[5,3,1,""],builderName:[5,2,1,""],getParameter:[5,3,1,""],setParameter:[5,3,1,""]},"lluvia.core.Duration":{nanoseconds:[6,2,1,""]},"lluvia.core.Format":{R16G16B16A16Sfloat:[16,2,1,""],R16G16B16A16Sint:[16,2,1,""],R16G16B16A16Uint:[16,2,1,""],R16G16B16Sfloat:[16,2,1,""],R16G16B16Sint:[16,2,1,""],R16G16B16Uint:[16,2,1,""],R16G16Sfloat:[16,2,1,""],R16G16Sint:[16,2,1,""],R16G16Uint:[16,2,1,""],R16Sfloat:[16,2,1,""],R16Sint:[16,2,1,""],R16Uint:[16,2,1,""],R32G32B32A32Sfloat:[16,2,1,""],R32G32B32A32Sint:[16,2,1,""],R32G32B32A32Uint:[16,2,1,""],R32G32B32Sfloat:[16,2,1,""],R32G32B32Sint:[16,2,1,""],R32G32B32Uint:[16,2,1,""],R32G32Sfloat:[16,2,1,""],R32G32Sint:[16,2,1,""],R32G32Uint:[16,2,1,""],R32Sfloat:[16,2,1,""],R32Sint:[16,2,1,""],R32Uint:[16,2,1,""],R64G64B64A64Sfloat:[16,2,1,""],R64G64B64A64Sint:[16,2,1,""],R64G64B64A64Uint:[16,2,1,""],R64G64B64Sfloat:[16,2,1,""],R64G64B64Sint:[16,2,1,""],R64G64B64Uint:[16,2,1,""],R64G64Sfloat:[16,2,1,""],R64G64Sint:[16,2,1,""],R64G64Uint:[16,2,1,""],R64Sfloat:[16,2,1,""],R64Sint:[16,2,1,""],R64Uint:[16,2,1,""],R8G8B8A8Sint:[16,2,1,""],R8G8B8A8Uint:[16,2,1,""],R8G8B8Sint:[16,2,1,""],R8G8B8Uint:[16,2,1,""],R8G8Sint:[16,2,1,""],R8G8Uint:[16,2,1,""],R8Sint:[16,2,1,""],R8Uint:[16,2,1,""]},"lluvia.core.Image":{allocationInfo:[7,2,1,""],changeLayout:[7,3,1,""],channelType:[7,2,1,""],channels:[7,2,1,""],clear:[7,3,1,""],createImageView:[7,3,1,""],depth:[7,2,1,""],fromHost:[7,3,1,""],height:[7,2,1,""],layout:[7,2,1,""],memory:[7,2,1,""],session:[7,2,1,""],shape:[7,2,1,""],size:[7,2,1,""],toHost:[7,3,1,""],usageFlags:[7,2,1,""],width:[7,2,1,""]},"lluvia.core.ImageAddressMode":{ClampToBorder:[16,2,1,""],ClampToEdge:[16,2,1,""],MirrorClampToEdge:[16,2,1,""],MirroredRepeat:[16,2,1,""],Repeat:[16,2,1,""]},"lluvia.core.ImageAxis":{U:[16,2,1,""],V:[16,2,1,""],W:[16,2,1,""]},"lluvia.core.ImageFilterMode":{Linear:[16,2,1,""],Nearest:[16,2,1,""]},"lluvia.core.ImageLayout":{ColorAttachmentOptimal:[16,2,1,""],DepthAttachmentStencilReadOnlyOptimalKHR:[16,2,1,""],DepthReadOnlyStencilAttachmentOptimalKHR:[16,2,1,""],DepthStencilAttachmentOptimal:[16,2,1,""],DepthStencilReadOnlyOptimal:[16,2,1,""],General:[16,2,1,""],Preinitialized:[16,2,1,""],PresentSrcKHR:[16,2,1,""],ShaderReadOnlyOptimal:[16,2,1,""],SharedPresentKHR:[16,2,1,""],TransferDstOptimal:[16,2,1,""],TransferSrcOptimal:[16,2,1,""],Undefined:[16,2,1,""]},"lluvia.core.ImageTiling":{Linear:[16,2,1,""],Optimal:[16,2,1,""]},"lluvia.core.ImageType":{e1D:[16,2,1,""],e2D:[16,2,1,""],e3D:[16,2,1,""]},"lluvia.core.ImageUsageFlagBits":{ColorAttachment:[16,2,1,""],DepthStencilAttachment:[16,2,1,""],InputAttachment:[16,2,1,""],Sampled:[16,2,1,""],Storage:[16,2,1,""],TransferDst:[16,2,1,""],TransferSrc:[16,2,1,""],TransientAttachment:[16,2,1,""]},"lluvia.core.ImageView":{addressModeU:[8,2,1,""],addressModeV:[8,2,1,""],addressModeW:[8,2,1,""],allocationInfo:[8,2,1,""],changeLayout:[8,3,1,""],channelType:[8,2,1,""],channels:[8,2,1,""],clear:[8,3,1,""],depth:[8,2,1,""],filterMode:[8,2,1,""],fromHost:[8,3,1,""],height:[8,2,1,""],image:[8,2,1,""],layout:[8,2,1,""],memory:[8,2,1,""],normalizedCoordinates:[8,2,1,""],sampled:[8,2,1,""],session:[8,2,1,""],shape:[8,2,1,""],size:[8,2,1,""],toHost:[8,3,1,""],usageFlags:[8,2,1,""],width:[8,2,1,""]},"lluvia.core.Memory":{__init__:[9,3,1,""],createBuffer:[9,3,1,""],createBufferFromHost:[9,3,1,""],createBufferLike:[9,3,1,""],createImage:[9,3,1,""],createImageFromHost:[9,3,1,""],isMappable:[9,2,1,""],isPageMappable:[9,3,1,""],memoryFlags:[9,2,1,""],pageCount:[9,2,1,""],pageSize:[9,2,1,""],session:[9,2,1,""]},"lluvia.core.MemoryAllocationInfo":{__init__:[10,3,1,""],leftPadding:[10,2,1,""],offset:[10,2,1,""],page:[10,2,1,""],size:[10,2,1,""]},"lluvia.core.MemoryPropertyFlagBits":{DeviceLocal:[16,2,1,""],HostCached:[16,2,1,""],HostCoherent:[16,2,1,""],HostVisible:[16,2,1,""],LazilyAllocated:[16,2,1,""]},"lluvia.core.NodeState":{Created:[16,2,1,""],Init:[16,2,1,""]},"lluvia.core.NodeType":{Compute:[16,2,1,""],Container:[16,2,1,""]},"lluvia.core.Parameter":{__init__:[11,3,1,""],get:[11,3,1,""],set:[11,3,1,""],type:[11,2,1,""]},"lluvia.core.ParameterType":{Float:[16,2,1,""],Int:[16,2,1,""]},"lluvia.core.PortDescriptor":{__init__:[12,3,1,""],binding:[12,2,1,""],direction:[12,2,1,""],name:[12,2,1,""],type:[12,2,1,""]},"lluvia.core.PortDirection":{In:[16,2,1,""],Out:[16,2,1,""]},"lluvia.core.PortType":{Buffer:[16,2,1,""],ImageView:[16,2,1,""],SampledImageView:[16,2,1,""]},"lluvia.core.Program":{spirV:[13,2,1,""]},"lluvia.core.Session":{compileComputeNode:[14,3,1,""],compileProgram:[14,3,1,""],createCommandBuffer:[14,3,1,""],createComputeNode:[14,3,1,""],createComputeNodeDescriptor:[14,3,1,""],createContainerNode:[14,3,1,""],createContainerNodeDescriptor:[14,3,1,""],createDuration:[14,3,1,""],createMemory:[14,3,1,""],createProgram:[14,3,1,""],getHostMemory:[14,3,1,""],getProgram:[14,3,1,""],getSupportedMemoryPropertyFlags:[14,3,1,""],run:[14,3,1,""],script:[14,3,1,""],scriptFile:[14,3,1,""],setProgram:[14,3,1,""]},"lluvia.util":{calculateGridSize:[20,4,1,""],loadNodes:[20,4,1,""],readRGBA:[20,4,1,""]},lluvia:{core:[18,0,0,"-"],util:[20,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function"},terms:{"32mb":14,"33554432l":14,"byte":[0,9,14],"class":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17],"default":[0,7,8,9,14],"float":16,"function":14,"import":14,"int":[16,20],"new":[0,1,7,8,9,14,18],"return":[0,1,7,9,14,18,20],"true":9,Its:[0,1,7,8],The:[1,7,8,9,14],__init__:[9,10,11,12],accur:[9,10,11,12],actual:1,adarv:[18,20],addport:[3,5],address:7,addressmod:7,addressmodeu:8,addressmodev:8,addressmodew:8,after:1,alloc:[9,14],allocationinfo:[0,7,8],ani:[1,9,14],anoth:0,apach:[18,20],arr:[7,8,9],arrai:[0,7,8,9],associ:14,assum:14,author:[18,20],avail:[9,14],avial:14,barrier:1,becaus:0,befor:1,begin:1,behavior:1,behaviour:1,being:1,bermudez:[18,20],between:[1,9],bind:[2,4,12],bindnod:4,bool:[7,14],boundari:7,buf:9,buffer:[1,2,4,9,14,15,16,17],bufferusageflagbit:[9,16],build:14,builder:14,buildernam:[3,5,14],calcul:20,calculategrids:20,call:[1,14],can:[1,9,14,20],cannot:[7,9,14],caus:0,chang:[1,7,8],changeimagelayout:1,changelayout:[7,8],channel:[7,8,9,20],channelcount:16,channeltyp:[7,8,9,16],chape:[7,8],check:[1,9],chhanel:[7,8],clamptobord:[7,16],clamptoedg:[7,16],clear:[1,7,8],clearimag:1,close:14,cmdbuffer:[2,4],code:14,color:9,colorattach:[9,16],colorattachmentoptim:[1,7,8,16],combin:[9,14],command:[1,14],commandbuff:[2,4,14,15,17],compil:14,compilecomputenod:14,compileflag:14,compileprogram:14,compli:[7,8],comput:[1,14,16,20],computenod:[1,14,15,17],computenodedescriptor:[14,15,17],contain:[14,16],containernod:[15,17],containernodedescriptor:[14,15,17],content:[0,1,7,8,9,17],convert:20,coordin:7,copi:[0,1,7,8,9],copybuff:1,copybuffertoimag:1,copyimagetobuff:1,copyimagetoimag:1,copyright:[18,20],core:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,19],correct:1,creat:[0,7,9,14,16,18],createbuff:9,createbufferfromhost:9,createbufferlik:9,createcommandbuff:14,createcomputenod:14,createcomputenodedescriptor:14,createcontainernod:14,createcontainernodedescriptor:14,createdur:14,createimag:9,createimagefromhost:9,createimageview:7,creatememori:14,createprogram:14,createsess:[14,18],creation:9,current:[1,9],data:0,david:[18,20],deduc:9,defin:[1,7,8,9,14],denot:14,depth:[7,8,9,20],depthattachmentstencilreadonlyoptimalkhr:[1,7,8,16],depthreadonlystencilattachmentoptimalkhr:[1,7,8,16],depthstencilattach:[9,16],depthstencilattachmentoptim:[1,7,8,16],depthstencilreadonlyoptim:[1,7,8,16],desc:14,descriptor:14,destin:1,detail:[1,18,20],determin:[9,14],devic:14,deviceloc:[0,14,16],differ:[0,7,8],dimens:[9,14],direct:12,directori:14,dispatch:1,doe:[1,7,8,14],dst:1,dtype:[0,9],durat:[1,14,15,17],durationend:1,durationstart:1,dure:14,e1d:16,e2d:16,e3d:16,each:[9,14],either:7,elaps:1,elif:9,els:9,empti:14,end:1,enough:14,enumer:17,equal:[0,7,8,14],equival:14,exactflagsmatch:14,exactli:14,execut:[1,14],exist:14,extra:14,fail:14,fals:[7,9,14],file:[14,20],filenam:14,fill:9,filter:7,filtermod:[7,8],finish:14,flag:[0,9,14],float16:16,float32:16,float64:16,follow:[1,7,8,9],format:[16,20],found:[14,20],fourth:9,from:[0,7,9,14],fromhost:[0,7,8],functionnam:[3,14],gener:[1,7,8,16],get:11,gethostmemori:14,getlayout:1,getnod:4,getparamet:[2,3,4,5],getport:[2,3,4],getprogram:14,getsupportedmemoryflag:14,getsupportedmemorypropertyflag:14,given:[9,14,20],glsl:[14,20],glslc:14,glslpath:20,greater:[9,14],grid:[1,2,3,14,20],gridi:[2,3],gridsiz:14,gridx:[2,3],gridz:[2,3],group:14,have:[1,7,9],height:[7,8,9,20],help:[9,10,11,12],host:[0,7,8,9],host_coher:14,host_loc:14,hostcach:[14,16],hostcoher:[14,16],hostvis:[14,16],howev:1,html:14,http:14,imag:[1,8,9,15,17,20],imageaddressmod:[7,16],imageaxi:16,imagefiltermod:[7,16],imagelayout:[1,7,8,16],imagetil:16,imagetyp:16,imageusageflag:9,imageusageflagbit:[9,16],imageview:[2,4,7,15,16,17],img:[1,7,8,9],imgshap:20,imgview:7,includ:14,includedir:14,incompat:9,incorrect:7,index:[2,4,17],indexbuff:[9,16],indirectbuff:[9,16],inform:14,init:[2,4,16],initi:[9,10,11,12],input:[0,9],inputattach:[9,16],insert:1,int16:16,int32:16,int64:16,int8:16,interpret:[9,14],ioerror:14,ismapp:[0,9],ispagemapp:9,its:[0,9,14,20],juan:[18,20],keep:1,keyerror:14,khrono:14,layout:[1,7,8],lazilyalloc:[14,16],least:14,leftpad:10,len:9,length:[9,14],licens:[18,20],linear:[7,16],list:[9,14],lluvia:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,19],load:20,loadnod:20,local:[2,3,14,20],locali:[2,3],locals:14,localx:[2,3],localz:[2,3],lua:[14,20],luapath:20,main:14,map:[0,9],mappabl:[0,9],match:[7,8,14],mem:14,memori:[0,1,7,8,14,15,17],memoryallocationinfo:[15,17],memorybarri:1,memoryflag:9,memorypropertyflag:14,memorypropertyflagbit:[14,16],method:[1,14],might:0,mirrorclamptoedg:[7,16],mirroredrepeat:[7,16],miss:9,mode:7,modul:17,moment:9,more:[7,9,14,18,20],must:[0,1,7,8,9,14],name:[2,3,4,5,12,14],nanosecond:6,nbyte:0,ndarrai:[0,7,8,9,20],ndim:[7,8,9],nearest:[7,16],necessari:1,need:9,newlayout:[1,7,8],node:[1,2,4,14,20],nodest:16,nodetyp:16,none:[0,7,8,14],nor:14,normal:7,normalizedcoordin:[7,8],notic:9,number:[7,8,9,14],numpi:[0,7,8,9],obj:[2,4,14],object:[0,1,2,4,7,9,14,18],offset:10,onc:14,one:[0,1,7,8,9,14],oper:1,optim:16,org:14,other:[1,9],otherwis:[0,1,9,14],out:16,output:[0,7,8],outsid:7,page:[0,9,10,14,17],pagecount:9,pages:[9,14],param:[2,3,4,5],paramet:[0,1,2,3,4,5,7,8,9,14,15,17,20],parametertyp:16,parat:[2,4],pass:14,path:[14,20],perform:1,physic:14,pixel:[1,7,8],point:1,port:14,portdesc:[3,5],portdescriptor:[3,5,14,15,17],portdirect:[12,16],porttyp:[12,16],possibl:[7,14],preiniti:[1,7,8,16],presentsrckhr:[1,7,8,16],problem:14,program:[3,14,15,17],properti:14,provid:14,r16g16b16a16sfloat:16,r16g16b16a16sint:16,r16g16b16a16uint:16,r16g16b16sfloat:16,r16g16b16sint:16,r16g16b16uint:16,r16g16sfloat:16,r16g16sint:16,r16g16uint:16,r16sfloat:16,r16sint:16,r16uint:16,r32g32b32a32sfloat:16,r32g32b32a32sint:16,r32g32b32a32uint:16,r32g32b32sfloat:16,r32g32b32sint:16,r32g32b32uint:16,r32g32sfloat:16,r32g32sint:16,r32g32uint:16,r32sfloat:16,r32sint:16,r32uint:16,r64g64b64a64sfloat:16,r64g64b64a64sint:16,r64g64b64a64uint:16,r64g64b64sfloat:16,r64g64b64sint:16,r64g64b64uint:16,r64g64sfloat:16,r64g64sint:16,r64g64uint:16,r64sfloat:16,r64sint:16,r64uint:16,r8g8b8a8sint:16,r8g8b8a8uint:16,r8g8b8sint:16,r8g8b8uint:16,r8g8sint:16,r8g8uint:16,r8sint:16,r8uint:16,rais:[0,1,7,8,9,14],rang:9,read:[7,14,20],readrgba:20,receiv:14,record:[1,2,4,14],registri:14,repeat:[7,16],requir:9,resolv:9,result:1,rgba:20,right:1,rule:[7,8],run:[1,2,4,14],runtimeerror:[0,1,7,9,14],same:[0,9],sampl:[7,8,9,16],sampledimageview:16,sampler:7,satisfi:1,script:14,scriptfil:14,search:17,see:[9,10,11,12,14,18,20],self:[0,1,2,3,4,5,7,8,9,10,11,12,14],sent:14,session:[0,1,2,4,7,8,9,15,17,18,20],set:[9,11,14],setparamet:[2,3,4,5],setprogram:14,sever:9,shader:[1,7,14],shadercod:14,shaderreadonlyoptim:[1,7,8,16],shape:[7,8,9,20],sharedpresentkhr:[1,7,8,16],should:[1,14],signatur:[9,10,11,12],size:[0,1,7,8,9,10,14,20],sourc:1,space:14,spec:14,specifi:[9,14],spir:[14,20],spirv:13,src:1,start:1,std:20,stop:1,storag:[9,16],storagebuff:[9,16],storagetexelbuff:[9,16],store:14,str:[2,4,7,8,14,20],string:[9,14],submit:1,support:14,supportedmemoryflag:14,system:14,tell:[7,14],tempor:14,test:[1,9],than:[0,7,8,9],thei:9,thi:[0,1,2,4,7,8,9,14],third:9,through:14,time:1,todo:1,tohost:[0,7,8],track:1,transferdst:[9,16],transferdstoptim:[1,7,8,16],transfersrc:[9,16],transfersrcoptim:[1,7,8,16],transientattach:[9,16],tupl:[9,14,20],two:1,type:[0,2,4,7,9,10,11,12,14,18,20],uint16:16,uint32:16,uint32_t:12,uint64:16,uint64_t:[9,14],uint8:[0,9,16],undefin:[1,7,8,16],underli:8,unicod:[2,3,4,5,12,14],uniform:14,uniformbuff:[9,16],uniformtexelbuff:[9,16],usag:[0,9],usageflag:[0,7,8,9],use:7,used:14,uses:1,using:14,util:[17,19],valid:14,valu:[1,7,8,9,11,14],valueerror:[0,7,8,9,14],vector:14,vertexbuff:[9,16],view:[7,8],visibl:0,vkmemorypropertyflagbit:14,vkspec:14,vulkan:14,werror:14,when:[1,14],where:[0,14,20],whether:[7,14],which:9,whitin:14,width:[7,8,9,20],within:[7,9],www:14,xyz:14,zero:[1,7,8,9]},titles:["Buffer","CommandBuffer","ComputeNode","ComputeNodeDescriptor","ContainerNode","ContainerNodeDescriptor","Duration","Image","ImageView","Memory","MemoryAllocationInfo","Parameter","PortDescriptor","Program","Session","Classes","Enumerations","Welcome to lluvia\u2019s documentation!","lluvia.core","Modules","lluvia.util"],titleterms:{"class":15,buffer:0,commandbuff:1,computenod:2,computenodedescriptor:3,containernod:4,containernodedescriptor:5,content:[],core:18,document:17,durat:6,enumer:16,imag:7,imageview:8,indic:17,lluvia:[17,18,20],memori:9,memoryallocationinfo:10,modul:19,paramet:11,portdescriptor:12,program:13,session:14,tabl:17,util:20,welcom:17}})