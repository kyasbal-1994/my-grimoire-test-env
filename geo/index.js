var GeometryFactory = gr.lib.fundamental.Geometry.GeometryFactory;
GeometryFactory.extend("quad",(geometry)=>{
  geometry.addAttributes([1,1,1,1,0,0,0,1,0,0,0,1],{
    COLOR1:{
      size:3
    }
  });
  geometry.addAttributes([1,0,1,1,1,0,0,1,1,0,1,1],{
    COLOR2:{
      size:3
    }
  });
});
