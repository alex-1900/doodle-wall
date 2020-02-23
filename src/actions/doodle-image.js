const fs = require('fs')

/** @var {Express} app */
module.exports = (app, canvas) => {
  return app.get('/doodle-image', function(req, res) {
    const stream = canvas.createPNGStream();
    stream.pipe(res);
  })
}
