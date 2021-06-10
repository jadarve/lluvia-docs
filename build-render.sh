#!/usr/bin/env bash

# npm config set prefix="${HOME}/npm"

# npm install -g postcss
# npm install -g postcss-cli
# npm install -g autoprefixer

# export PATH=~/node_modules/.bin:$PATH

npm install

pwd
ls

git submodule update --init --recursive --depth 1
hugo --gc --minify
