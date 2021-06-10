#!/usr/bin/env bash

sudo npm install -g postcss-cli
sudo npm install autoprefixer

export PATH=~/node_modules/.bin:$PATH

git submodule update --init --recursive --depth 1
hugo --gc --minify
