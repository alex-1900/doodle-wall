const { createCanvas } = require('canvas')
const refresh = require('../../blankDoodleImage')
const { canvasLoadDoodleImage } = require('./iostream')

const canvas = createCanvas(700, 450)
canvasLoadDoodleImage(canvas);

function Components() {
  this.canvas = createCanvas(700, 450)
  canvasLoadDoodleImage(this.canvas)
}

Components.prototype.getCanvas = function() {
  return this.canvas;
}

Components.prototype.refresh = function() {
  this.canvas = createCanvas(700, 450);
  refresh();
}

const components = new Components()
module.exports = components;
