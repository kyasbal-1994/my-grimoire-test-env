var Quaternion = gr.lib.math.Quaternion;
var Matrix = gr.lib.math.Matrix;

gr.registerComponent('StareAt', {
  attributes: {
    center: {
      default: '0, 0, 0',
      converter: 'Vector3',
    },
    axis: {
      default: '0, 1, 0',
      converter: 'Vector3',
    },
    speed: {
      default: 0.03,
      converter: 'Number',
    },
    zoom: {
      default: 1.0,
      converter: 'Number',
    },
    zoomPhase: {
      default: 1.3,
      converter: 'Number',
    },
  },
  $awake: function() {
    this._transform = this.node.getComponent('Transform');
  },
  $mount: function() {
    this.phi = 0;
    var d = this.node.getAttribute('position').subtractWith(this.getAttribute('center'));
		this.getAttributeRaw("speed").boundTo("_speed");
		this.getAttributeRaw("axis").boundTo("_axis");
		this.getAttributeRaw("center").boundTo("_center");
		this.getAttributeRaw("zoom").boundTo("_zoom");
		this.getAttributeRaw("zoomPhase").boundTo("_zoomPhase");
    this.direction = d.normalized;
    this.distance = d.magnitude;
    this.baseRotation = this._transform.localRotation;
  },
  $update: function() {
    this.phi += this._speed;
    var rotateQuaternion = Quaternion.angleAxis(this.phi,this._axis);
    var rotateMatrix = Matrix.rotationQuaternion(rotateQuaternion);
    var rotatedDirection = Matrix.transformNormal(rotateMatrix, this.direction);
    this._transform.localPosition = this._center
      .addWith(rotatedDirection.multiplyWith(this.distance - this._zoom * Math.sin(this.phi * this._zoomPhase)));
    this._transform.localRotation = Quaternion.multiply(rotateQuaternion, this.baseRotation);
  },
});
