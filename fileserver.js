var formidable = require('formidable'),
    http = require('http'),
    util = require('util');
    var fs = require('fs');
    http.createServer(function (req, res) {
        if (req.url == '/fileuploads') {
          var form = new formidable.IncomingForm();
          form.parse(req, function (err, fields, files) {
            var oldpath = ;
            var newpath = 'C:/Users/hp/' +'file111';
            fs.rename(oldpath, newpath, function (err) {
              if (err) throw err;
              res.write('File uploaded and moved!');
              res.end();
            });
       });
        } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
          res.write('<input type="file" name="filetoupload"><br>');
          res.write('<input type="submit">');
          res.write('</form>');
          return res.end();
        }
      }).listen(3000);