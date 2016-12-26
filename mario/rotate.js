var Quaternion = gr.lib.math.Quaternion;
gr.registerComponent("Rotate",{
  attributes:{
    speed:{
      converter:"Number",
      default:1
    }
  },
  $mount:function(){
    this.transform = this.node.getComponent("Transform");
  },
  $update:function(){
    var speed = this.getAttribute("speed");
    this.transform.localRotation = Quaternion.multiply(this.transform.localRotation,Quaternion.euler(speed,speed,speed));
  }
});
