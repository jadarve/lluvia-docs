#!/usr/bin/env bash

npm install -g postcss-cli

git submodule update --init --recursive --depth 1
hugo --gc --minify