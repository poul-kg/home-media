
/*
 * GET home page.
 */
var fs = require('fs');

exports.index = function(req, res){
  var videosDir = req.app.get('videosDir'),
      files,
      mp4files = [],
      i;

    console.log(videosDir);
  files = fs.readdirSync(videosDir);

  // Filter out only mp4 files
  for (i = 0; i < files.length; i += 1) {
      if (files[i].match(/\.mp4$/)) {
          mp4files.push(files[i]);
      }
  }

  res.render('index', { title: 'Express', mp4files: mp4files });
};