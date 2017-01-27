var GeometryFactory = gr.lib.fundamental.Geometry.GeometryFactory;
var Geometry = gr.lib.fundamental.Geometry.Geometry;
GeometryFactory.addType("custom",{
  count:{
    converter:"Number",
    default:100
  }
},(gl,attrs)=>{
  const geo = new Geometry(gl);
  const pos = new Float32Array(attrs.count * 3);
  const col = new Float32Array(attrs.count * 3);
  const sizes = new Float32Array(attrs.count);
  const iArr = new Array(attrs.count);
  for(let i = 0; i < attrs.count; i++){
    pos[3 * i] = Math.random() * 2.0 - 1.0;
    pos[3 * i + 1] = Math.random() * 2.0 - 1.0;
    pos[3 * i + 2] = 0;
    iArr[i] = i;
    sizes[i] = Math.random();
  }
  for(let i = 0; i < attrs.count * 3; i++){
    col[i] = Math.random();
  }
  geo.addAttributes(pos,{
    POSITION:{
      size:3
    }
  });
  geo.addAttributes(col,{
    POWERS:{
      size:3
    }
  });
  geo.addAttributes(sizes,{
    SIZES:{
      size:1
    }
  });
  geo.addIndex("default",iArr,WebGLRenderingContext.POINTS);
  return geo;
});
