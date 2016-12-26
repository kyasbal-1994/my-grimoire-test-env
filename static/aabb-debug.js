(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var gr = require('grimoirejs').default;

gr.lib.fundamental.Material.MaterialFactory.addSORTMaterialFromURL("gizmo","../static/gizmo.sort");
gr.registerComponent('AABB', {
  attributes: {
  },
  $mount: function $mount() {
    var aabb = this.node.getComponent('MeshRenderer')._geometry.aabb;
    this.node.append('<mesh\n      position="' + aabb.Center + '"\n      scale="' + aabb.pointLBF.subtractWith(aabb.pointRTN).multiplyWith(0.5).rawElements.map(function (v) {
      return Math.abs(v);
    }).join(',') + '"\n material="new(gizmo)"      geometry="cube"\n      color="#F00A"\n   targetBuffer="wireframe"   \n      />');
  }
});

},{"grimoirejs":2}],2:[function(require,module,exports){
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS;
},{}]},{},[1])
//# sourceMappingURL=index.js.map
