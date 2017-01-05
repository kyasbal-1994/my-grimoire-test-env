let values={
  roughness:0.8,
  refractive:1.0,
  albedo:[255,255,255,255],
  emission:[0,0,0],
  kCoeff:0.3,
  spotLightIntensity:1.0
};

gr(()=>{
  const $$ = gr("#canvas");
  const mesh = $$("mesh");
  const spotLight = $$("light.spot");
  const gui = new dat.GUI();
  let controller = gui.add(values,"roughness",0,1);
  controller.onChange((value)=>{
    mesh.setAttribute("roughness",value);
  });
  controller = gui.add(values,"refractive",0,1);
  controller.onChange((value)=>{
    mesh.setAttribute("refractive",value);
  });
  controller = gui.add(values,"kCoeff",0,1);
  controller.onChange((value)=>{
    mesh.setAttribute("kCoeff",value);
  });
  controller = gui.addColor(values,"albedo");
  controller.onChange((value)=>{
    mesh.setAttribute("albedo",value.map(v=>v/255.0));
  });
  controller = gui.addColor(values,"emission");
  controller.onChange((value)=>{
    mesh.setAttribute("emission",value.map(v=>v/255.0));
  });
  controller = gui.add(values,"spotLightIntensity",0,10000);
  controller.onChange((value)=>{
    spotLight.setAttribute("intensity",value);
  });
});
