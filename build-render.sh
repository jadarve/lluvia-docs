#!/usr/bin/env bash

npm install postcss-cli

export PATH=~/node_modules/.bin:$PATH

git submodule update --init --recursive --depth 1
hugo --gc --minify
