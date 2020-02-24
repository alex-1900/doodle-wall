const { loadImage } = require('canvas')
const { writePNGStreamToCanvas } = require('../services/iostream')
const { DOODLE_IMAGE_PATH } = require('../../constants')
const components = require('../services/components')
const fs = require('fs')

function merge(canvas, image) {
  const ctx = canvas.getContext('2d')
  ctx.drawImage(image, 0, 0);
}

/** @var {Express} app */
module.exports = (app) => {
  return app.post('/merge-image', function (req, res) {
    const canvas = components.getCanvas();
    if (!req.files || Object.keys(req.files).length === 0 || 'image/png' !== req.files.file.mimetype) {
      return res.status(400).send('No files were uploaded.');
    }

    const buffer = req.files.file.data;
    loadImage(buffer).then(image => {
      merge(canvas, image)
      writePNGStreamToCanvas(canvas, DOODLE_IMAGE_PATH);
      res.send('done')
    });
  });
};
