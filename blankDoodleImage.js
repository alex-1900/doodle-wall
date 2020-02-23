const { createCanvas, loadImage } = require('canvas')
const fs = require('fs')
const canvas = createCanvas(700, 450)
 
const out = fs.createWriteStream(__dirname + '/doodle.png');

const stream = canvas.createPNGStream();
stream.pipe(out);
out.on('finish', () =>  console.log('The PNG file was created.'));
