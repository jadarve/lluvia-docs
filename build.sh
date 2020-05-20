#!/usr/bin/env bash

# install dependencies
apt update
apt install -y doxygen

git clone -b master --depth 1 https://github.com/jadarve/lluvia.git

# Generate Doxygen documentation
cd lluvia
mkdir -p build/doc

doxygen Doxyfile

# back to root
cd ..

# move to the static folder so that Hugo can pack it with the generated site
mkdir -p static/api
mv lluvia/build/doc/html static/api/cpp

# generate site
hugo --gc --minify
