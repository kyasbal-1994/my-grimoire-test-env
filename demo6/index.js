var hash = location.hash;
if (!hash) {
    hash = "Duck@gltf-MaterialsCommon";
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

gr(function() {
    const ext = modelType === "glTF-Binary" ? "glb" : "gltf";
    gr("#main")("scene").append('<model src="../tf/' + modelName + '/' + modelType + '/' + modelName + '.' + ext + '"/>')
});
