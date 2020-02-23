const { createCanvas } = require('canvas')
const fs = require('fs')
function refresh() {
  const canvas = createCanvas(700, 450)
  const out = fs.createWriteStream(__dirname + '/doodle.png');

  const stream = canvas.createPNGStream();
  stream.pipe(out);
  out.on('finish');
}

module.exports = refresh;
