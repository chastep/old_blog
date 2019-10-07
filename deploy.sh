#!/usr/bin/env sh

# abort on errors
set -e

# generate
rm -rf dist
yarn generate

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:chastep/chastep.github.io.git master
