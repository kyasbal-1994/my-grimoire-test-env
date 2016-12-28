#!/bin/bash
if [ $# -ne 1 ]; then
  echo "Specified parameter length is invalid"
  exit 1
fi

LIB_FOLDER="$1"
LIB_NAME="grimoire-${LIB_FOLDER}"

if [ ${LIB_FOLDER} = "grimoire" ]; then
   LIB_FOLDER="core"
   LIB_NAME="grimoire"
fi

ln -s ../../../grimoire/${LIB_FOLDER}/register/${LIB_NAME}.js.map ./static/${LIB_NAME}.js.map
ln -s ../../../grimoire/${LIB_FOLDER}/register/${LIB_NAME}.js ./static/${LIB_NAME}.js
ln -s ../../../grimoire/${LIB_FOLDER}/register/${LIB_NAME}.min.js ./static/${LIB_NAME}.min.js
ln -s ../../../grimoire/${LIB_FOLDER}/register/${LIB_NAME}.min.js.map ./static/${LIB_NAME}.min.js.map
