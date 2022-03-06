#!/usr/bin/env bash

set -e

#build

npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:ezekielenns/Portfolio.git master:gh-pages
cd -