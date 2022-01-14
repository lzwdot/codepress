const express = require('express')
const app = express()
const multer = require('multer')
const bodyParser = require('body-parser')
const sparkMD5 = require('spark-md5')

//引入 path 和 fs
const path = require('path')
const fs = require('fs')

const upload = multer({dest: './uploads/'})
const sleep = () => new Promise(resolve => {
  setTimeout(resolve, 1000)
})

app.use(upload.any())
app.use(bodyParser.urlencoded({extended: false, limit: '2100000kb'}))

//设置跨域访问
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.post('/upload', function (req, res) {
  // console.log(req.body)
  // 处理 multipart/form-data 方式
  if (req.files) {
    // 拿到后缀名
    const extname = path.extname(req.files[0].originalname);
    //拼接新的文件路径，文件加上后缀名
    const newPath = req.files[0].path + extname;
    //重命名
    fs.rename(req.files[0].path, newPath, async function (err) {
      await sleep()

      if (err) {
        res.send({
          code: 1,
          codeText: err
        })
      } else {
        res.send({
          code: 0,
          codeText: '上传成功',
          originalFilename: req.files.originalname,
          servicePath: 'http://localhost:8888/' + newPath
        })
      }
    })
  } else if (req.body) { // 处理  application/x-www-form-urlencoded 方式
    //过滤data:URL
    const base64Data = decodeURIComponent(req.body.file).replace(/^data:image\/\w+;base64,/, "");
    const dataBuffer = Buffer.from(base64Data, 'base64');
    // 利用扩展生产唯一 md5 名字
    const spark = new sparkMD5.ArrayBuffer()
    spark.append(base64Data)
    // 拿到后缀名
    const extname = path.extname(req.body.filename);
    // 新路径
    const newPath = '/uploads/' + spark.end() + extname
    // base64 写入文件
    fs.writeFile(path.join(__dirname,) + newPath, dataBuffer, async function (err) {
      await sleep()

      if (err) {
        res.send({
          code: 1,
          codeText: err
        })
      } else {
        res.send({
          code: 0,
          codeText: '上传成功',
          originalFilename: req.body.filename,
          servicePath: 'http://localhost:8888' + newPath
        })
      }
    })
  }
})

app.listen(8888, function () {
  console.log('Server is running at http://localhost:8888');
})