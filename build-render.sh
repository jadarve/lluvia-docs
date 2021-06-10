#!/usr/bin/env bash

npm install -g postcss-cli
npm install autoprefixer

export PATH=~/node_modules/.bin:$PATH

git submodule update --init --recursive --depth 1
hugo --gc --minify
