var hash = location.hash;
if (!hash) {
    hash = "Duck@gltf";
}
hash = hash.replace("#", "");
parseResult = /^(.+)@(.+)$/.exec(hash);
var modelName = parseResult[1],
    modelType = parseResult[2];

var links = document.getElementsByClassName("modelName");
for (var i = 0; i < links.length; i++) {
    var link = links.item(i);
    link.addEventListener("click", function() {
        modelChange(this.innerText);
    });
}

var Quaternion = gr.lib.math.Quaternion;
gr.registerComponent("Rotate",{
  attributes:{
    speed:{
      converter:"Number",
      default:0.01
    }
  },
  $mount:function(){
    this.transform = this.node.getComponent("Transform");
  },
  $update:function(){
    var speed = this.getAttribute("speed");
    this.transform.rotation = Quaternion.multiply(this.transform.rotation,Quaternion.euler(0,speed,0));
  }
});


links = document.getElementsByClassName("modelType");
for (var i = 0; i < links.length; i++) {
    var link = links.item(i);
    link.addEventListener("click", function() {
        modelChange(undefined, this.innerText);
    });
}

gr.register(function() {
    //gr.nodeDeclarations.get("gltf-mesh").defaultComponents.push(gr.componentDeclarations.get("AABB").name);
});

function modelChange(name, type) {
    if (name === void 0) {
        name = modelName;
    }
    if (type === void 0) {
        type = modelType;
    }
    location.hash = "#" + name + "@" + type;
    location.reload();
}

$(function(){
  $("input").on("input",function(){
    gr("#main")("gltf-animation").setAttribute("frame",this.value/100);
  });
});

gr(function() {
    gr("#main")("scene").append('<model waitForLoad="true" src="../tf2-samples/' + modelName + '/' + modelType + '/' + modelName + '.gltf' + '"/>')
    gr("#main")("model").addComponent("Rotate");
});
