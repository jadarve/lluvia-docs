#!/usr/bin/env bash

npm install

git submodule update --init --recursive --depth 1
hugo --gc --minify
