var express = require("express");
var app = express();
var multer = require("multer");
var fs = require("fs");

var upload = multer({dest: 'upload/'});

app.set('view engine', 'jade');
app.set('views', 'template/');

app.get('/', (req, resp)=>{
  resp.render('index', {youAreUsingJade:true});
});

app.post('/getFileSize', upload.single('file'), (req, resp)=>{
  fs.stat(req.file.path, (err, stats)=>{
    resp.json({size:stats.size});
  });
}).listen(8080);