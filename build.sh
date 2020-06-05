#!/usr/bin/env bash

# # install dependencies
# sudo apt update
# sudo apt install -y doxygen

# git clone -b master --depth 1 https://github.com/jadarve/lluvia.git

# Generate Doxygen documentation
cd ../lluvia
mkdir -p build/doc
doxygen Doxyfile

# back to root
cd ../lluvia-docs

# sync the static folder so that Hugo can pack it with the generated site
mkdir -p static/api
rsync -av ../lluvia/build/doc/html/ static/api/cpp

# Python documentation
cd ../lluvia/python/doc
make html

# back to root
cd ../../../lluvia-docs
rsync -av ../lluvia/python/doc/build/html/ static/api/python

# generate site
hugo --gc --minify
