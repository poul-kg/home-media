/*
 * GET home page.
 */
var fs = require('fs');

exports.index = function (req, res) {
    var videosDir = req.app.get('videosDir'),
        files,
        mp4files = [],
        i,
        fileName,
        title;

    console.log(videosDir);
    files = fs.readdirSync(videosDir);

    // Filter out only mp4 files
    for (i = 0; i < files.length; i += 1) {
        if (files[i].match(/\.mp4$/i)) {
            fileName = files[i];
            // change dots to spaces, remote mp4
            title = fileName.replace(/\./g, ' ')
                .replace(/mp4/gi, '');

            mp4files.push({
                title: title,
                fileName: files[i]
            });
        }
    }

    res.render('index', { title: 'Express', mp4files: mp4files });
};