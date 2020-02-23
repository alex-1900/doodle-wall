const fs = require('fs')
const { loadImage } = require('canvas')

const writePNGStreamToCanvas = (canvas, to) => {
  const out = fs.createWriteStream(to);
  const stream = canvas.createPNGStream();
  stream.pipe(out);
}

const canvasLoadDoodleImage = (canvas) => {
  const ctx = canvas.getContext('2d');
  loadImage(__dirname + '/../../doodle.png').then(image => {
    ctx.drawImage(image, 0, 0);
  });
}

module.exports = {
  writePNGStreamToCanvas,
  canvasLoadDoodleImage
}
