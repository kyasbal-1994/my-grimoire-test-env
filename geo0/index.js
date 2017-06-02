var GeometryFactory = gr.lib.fundamental.Geometry.GeometryFactory;
var Geometry = gr.lib.fundamental.Geometry.Geometry;
GeometryFactory.addType("quad2",{},(gl)=>{
  const geometry = new Geometry(gl);
  geometry.addAttributes([-1,1,0,1,1,0,1,-1,0,-1,-1,0],
  {
    POSITION:{
      size:3
    }
  });
  geometry.addAttributes([0,0,1,0,0,1,0,0,1,0,0,1],
  {
    NORMAL:{
      size:3
    }
  });
  geometry.addAttributes([1,1,1,1,0,0,0,1,0,0,0,1],{
    COLOR:{
      size:3
    }
  });
  geometry.addAttributes([1,1,1,1,0,0,0,1,0,0,0,1],{
    COLOR2:{
      size:3
    }
  });
  const n = 1000;
  const arr = [];
  const arr2 = [];
  for(let i = 0; i < n; i ++){
    arr.push(Math.random() * 100);
    arr.push(Math.random() * 100);
    arr.push(Math.random() * 100);
    arr2.push(Math.random() * 100);
  }
  geometry.addAttributes(arr,{
    POSITION_BASE: {
      size:3,
      instancingDivisor:4
    }
  });
  geometry.addAttributes(arr2,{
    RANDOM_SEED: {
      size:1,
      instancingDivisor:4
    }
  });
  geometry.addIndex("default",n*4,[0,2,1,3,2,0]);
  return geometry;
});
