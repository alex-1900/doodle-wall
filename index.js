const express = require('express');
var cors = require('cors')
const fileUpload = require('express-fileupload');

const components = require('./src/services/components')
const actionMergeImage = require('./src/actions/merge-image');
const actionDoodleImage = require('./src/actions/doodle-image');
const fs = require('fs')

const refresh = require('./blankDoodleImage')

// App 设置
const app = express();
app.use(cors())
app.use(fileUpload());

// 动作
actionMergeImage(app)
actionDoodleImage(app)

app.get('/', function(req, res) {
  const html = fs.readFileSync(__dirname + '/static/index.html', 'utf8');
  res.send(html)
})

app.get('/refresh', function(req, res) {
  components.refresh();
  res.send('done')
})

app.listen(3000, () => console.log(`Example app listening on port 3000!`));
