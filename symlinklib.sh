#!/bin/bash
if [ $# -ne 1 ]; then
  echo "Specified parameter length is invalid"
  exit 1
fi

LIB_NAME=${1//grimoirejs/grimoire}
ln -s ../../${1}/register/${LIB_NAME}.js ./static/${LIB_NAME}.js
ln -s ../../${1}/register/${LIB_NAME}.js.map ./static/${LIB_NAME}.js.map
ln -s ../../${1}/register/${LIB_NAME}.min.js ./static/${LIB_NAME}.min.js
ln -s ../../${1}/register/${LIB_NAME}.min.js.map ./static/${LIB_NAME}.min.js.map
