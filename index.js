const express = require('express');
var cors = require('cors')
const fileUpload = require('express-fileupload');

const { createCanvas } = require('canvas')
const { canvasLoadDoodleImage } = require('./src/services/iostream')
const actionMergeImage = require('./src/actions/merge-image');
const actionDoodleImage = require('./src/actions/doodle-image');
const fs = require('fs')

// App 设置
const app = express();
app.use(cors())
app.use(fileUpload());

// 加载 doodle 图片
const canvas = createCanvas(700, 450)
canvasLoadDoodleImage(canvas);

// 动作
actionMergeImage(app, canvas)
actionDoodleImage(app, canvas)

app.get('/', function(req, res) {
  const html = fs.readFileSync(__dirname + '/static/index.html', 'utf8');
  res.send(html)
})

app.listen(3000, () => console.log(`Example app listening on port 3000!`));
