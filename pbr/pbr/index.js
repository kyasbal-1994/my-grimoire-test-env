var GeometryFactory = gr.lib.fundamental.Geometry.GeometryFactory;

function surfaceWire(offset) {
  return [0, 1, 1, 2, 2, 3, 3, 0, 0, 2, 1, 3].map(v => v + offset);
}

let values = {
  roughness: 0.8,
  refractive: 1.0,
  albedo: [255, 255, 255, 255],
  emission: [0, 0, 0],
  kCoeff: 0.3,
  spotLightIntensity: 1.0,
  smT: 0.1
};

gr(() => {
  const $$ = gr("#canvas");
  const mesh = $$("mesh");
  const spotLight = $$("light.spot");
  const gui = new dat.GUI();
  let controller = gui.add(values, "roughness", 0, 1);
  controller.onChange((value) => {
    mesh.setAttribute("roughness", value);
  });
  controller = gui.add(values, "refractive", 0, 1);
  controller.onChange((value) => {
    mesh.setAttribute("refractive", value);
  });
  controller = gui.add(values, "kCoeff", 0, 1);
  controller.onChange((value) => {
    mesh.setAttribute("kCoeff", value);
  });
  controller = gui.addColor(values, "albedo");
  controller.onChange((value) => {
    mesh.setAttribute("albedo", value.map(v => v / 255.0));
  });
  controller = gui.addColor(values, "emission");
  controller.onChange((value) => {
    mesh.setAttribute("emission", value.map(v => v / 255.0));
  });
  controller = gui.add(values, "spotLightIntensity", 0, 10000);
  controller.onChange((value) => {
    spotLight.setAttribute("intensity", value);
  });
  controller = gui.add(values, "smT", 0, 10000);
  controller.onChange((value) => {
    mesh.setAttribute("smT", value);
  });
  const canvas = document.createElement("canvas");
  var ctx = canvas.getContext('2d');
  canvas.width = 256;
  canvas.height = canvas.width;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';

  // const body = document.getElementsByTagName("body").item(0);
  // body.appendChild(canvas);
  ctx.font = "30px ＭＳ Ｐゴシック";
  ctx.fillStyle = 'rgb(255, 255, 255)';


  ctx.fillText("HELLO", canvas.width / 2, 0);

  var pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var data = pixels.data;
  var textHeight = 0;
  var currentRow = -1;
  for (var i = 0, len = data.length; i < len; i += 4) {
      var r = data[i], g = data[i + 1], b = data[i + 2], alpha = data[i + 3];
      if (alpha > 0) {
          var row = Math.floor((i / 4) / canvas.width);
          if (row > currentRow) {
              currentRow = row;
              textHeight++;
          }
      }
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillText("HELLO", canvas.width / 2, (canvas.height - textHeight) / 2);
  const texture = canvas.toDataURL();
  const b2 = canvas.toBlob(b3 => {
      const b4 = URL.createObjectURL(b3);
      const img = new Image();
      img.src = b4;
      img.onload = function(){
      mesh.setAttribute("roughnessMap", b4);
    }
  });
  $$("mesh").on("mouseenter",(n)=>{
    n.node.setAttribute("albedo","red")
  });
  $$("mesh").on("mouseleave",(n)=>{
    n.node.setAttribute("albedo","blue")
  });
  //mesh.setAttribute("roughnessMap", texture);
  // const scale = this.node.getAttribute("scale")
  // this.node.setAttribute("scale", this.normalize(canvas.width * scale.X, canvas.height * scale.Y) + ",0");
});
