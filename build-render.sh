#!/usr/bin/env bash

npm config set prefix="${HOME}/npm"

npm install -g postcss-cli
npm install autoprefixer
npm audit fix

export PATH=~/node_modules/.bin:$PATH

git submodule update --init --recursive --depth 1
hugo --gc --minify
