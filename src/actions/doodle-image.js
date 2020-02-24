const fs = require('fs')
const components = require('../services/components')

/** @var {Express} app */
module.exports = (app) => {
  return app.get('/doodle-image', function(req, res) {
    const canvas = components.getCanvas();
    const stream = canvas.createPNGStream();
    stream.pipe(res);
  })
}
