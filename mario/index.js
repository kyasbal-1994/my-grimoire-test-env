// ‥‥‥‥‥‥‥‥‥‥‥‥‥□□□
// ‥‥‥‥‥‥〓〓〓〓〓‥‥□□□
// ‥‥‥‥‥〓〓〓〓〓〓〓〓〓□□
// ‥‥‥‥‥■■■□□■□‥■■■
// ‥‥‥‥■□■□□□■□□■■■
// ‥‥‥‥■□■■□□□■□□□■
// ‥‥‥‥■■□□□□■■■■■‥
// ‥‥‥‥‥‥□□□□□□□■‥‥
// ‥‥■■■■■〓■■■〓■‥‥‥
// ‥■■■■■■■〓■■■〓‥‥■
// □□■■■■■■〓〓〓〓〓‥‥■
// □□□‥〓〓■〓〓□〓〓□〓■■
// ‥□‥■〓〓〓〓〓〓〓〓〓〓■■
// ‥‥■■■〓〓〓〓〓〓〓〓〓■■
// ‥■■■〓〓〓〓〓〓〓‥‥‥‥‥
// ‥■‥‥〓〓〓〓‥‥‥‥‥‥‥‥
var dataSet = [
    "無", "無", "無", "無", "無", "無", "無", "無", "無", "無", "無", "無", "無", "肌", "肌", "肌",
    "無", "無", "無", "無", "無", "無", "赤", "赤", "赤", "赤", "赤", "無", "無", "肌", "肌", "肌",
    "無", "無", "無", "無", "無", "赤", "赤", "赤", "赤", "赤", "赤", "赤", "赤", "赤", "肌", "肌",
    "無", "無", "無", "無", "無", "茶", "茶", "茶", "肌", "肌", "茶", "肌", "無", "赤", "赤", "赤",
    "無", "無", "無", "無", "茶", "肌", "茶", "肌", "肌", "肌", "茶", "肌", "肌", "赤", "赤", "赤",
    "無", "無", "無", "無", "茶", "肌", "茶", "茶", "肌", "肌", "肌", "茶", "肌", "肌", "肌", "赤",
    "無", "無", "無", "無", "茶", "茶", "肌", "肌", "肌", "肌", "茶", "茶", "茶", "茶", "赤", "無",
    "無", "無", "無", "無", "無", "無", "肌", "肌", "肌", "肌", "肌", "肌", "肌", "赤", "無", "無",
    "無", "無", "赤", "赤", "赤", "赤", "赤", "青", "赤", "赤", "赤", "青", "赤", "無", "無", "無",
    "無", "赤", "赤", "赤", "赤", "赤", "赤", "赤", "青", "赤", "赤", "赤", "青", "無", "無", "茶",
    "肌", "肌", "赤", "赤", "赤", "赤", "赤", "赤", "青", "青", "青", "青", "青", "無", "無", "茶",
    "肌", "肌", "肌", "無", "青", "青", "赤", "青", "青", "黄", "青", "青", "黄", "青", "茶", "茶",
    "無", "肌", "無", "茶", "青", "青", "青", "青", "青", "青", "青", "青", "青", "青", "茶", "茶",
    "無", "無", "茶", "茶", "茶", "青", "青", "青", "青", "青", "青", "青", "青", "青", "茶", "茶",
    "無", "茶", "茶", "茶", "青", "青", "青", "青", "青", "青", "青", "無", "無", "無", "無", "無",
    "無", "茶", "無", "無", "青", "青", "青", "青", "無", "無", "無", "無", "無", "無", "無", "無"
];

function getRgbColor(c) {
    var colorHash = {
        "無": "#AA000088", // 段ボール色
        "白": "#ffffff88",
        "肌": "#ffcccc88",
        "茶": "#80000088",
        "赤": "#ff000088",
        "黄": "#ffff0088",
        "緑": "#00ff0088",
        "水": "#00ffff88",
        "青": "#0000ff88",
        "紫": "#80008088"
    };
    return colorHash[c];
}

var stats;

gr(function() {
    function init() {
        stats = new Stats();
        stats.setMode(0); // 0: fps, 1: ms, 2: mb
        stats.domElement.style.position = "fixed";
        stats.domElement.style.left = "5px";
        stats.domElement.style.top = "5px";
        document.body.appendChild(stats.domElement);

        for (var i = 0; i < dataSet.length; i++) {
            var x = i % 16;
            var y = Math.floor(i / 16);
            var px = x - 8;
            var pz = y - 8;
            var position = 'position="' + px + ',0,' + pz + '"';
            var color = getRgbColor(dataSet[i]);
            gr("#canvas")("scene").append('<mesh geometry="cube" scale="0.4, 0.4, 0.4" ' + position + ' color="' + color + '"/>');
        }
        gr("#canvas")("mesh").addComponent("Rotate");
    }

    var ratio = 0;

    function rot() {
        stats.update();
        requestAnimationFrame(rot);
    }
    init();
    rot();
});

const GeometryFactory = gr.lib.fundamental.Geometry.GeometryFactory;
const GeometryBuilder = gr.lib.fundamental.Geometry.GeometryBuilder;

GeometryFactory.addType("test",{
  div:{
    converter:"Number",
    defaultValue:10
  }
},(gl,attrs)=>{
  gl
  return GeometryBuilder.build(gl,{
    indicies:{
      default:{
        generator:function*(){
          yield* Array.apply(null, {length:attrs.div*attrs.div}).map((_, i) => i);
        },
        topology:WebGLRenderingContext.LINES
      }
    },
    verticies:{
      main:{
        size:{
          position:3,
          normal:3,
          texCoord:2
        },
        count:attrs.div * attrs.div,
        getGenerators:()=>{
          return {
            position:function*(){
              var stride = 1/attrs.div;
              for(var i = 0; i < attrs.div;i++){
                for(var j = 0; j < attrs.div; j++)
                {
                  yield* [stride*i,stride*j,0];
                }
              }
            },
            normal:function*(){
              while(true){
                yield 1;
              }
            },
            texCoord:function*(){
              while(true){
                yield 0;
              }
            }
          };
        }
      }
    }
  });
});
