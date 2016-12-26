capt='glTF-MaterialsCommon'
for file in `ls -d ./gltf-original/*/$capt/`
do
  fName= sed `s/\./gltf-original\/(.*)/$capt/\1/g`
  echo $fName
  cp -a -P -R $file gltf
done
