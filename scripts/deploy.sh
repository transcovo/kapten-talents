#!/bin/env bash

echo "Deployment..."

echo "> Exporting the app"

npm run export

echo "> Cleaning docs/ folder"

find ./docs/ -type f -not -name 'CNAME' -delete

echo "> Copying files to docs/"

cp -R __sapper__/export/* docs/
