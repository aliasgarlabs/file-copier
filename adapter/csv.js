// eslint-disable-file
let _ = require('lodash'),
  csv = require('csv-parser'),
  fs = require('fs'),
  filePath = 'assets/wedding/majlis_3.csv';

function readCSV (filename, cb) {
  let results = [];

  fs.createReadStream(filename)
    .pipe(csv())
    .on('data', (data) => {
      if (data['512']) {
        return results.push(data.filename + '.jpg');
      }

      return results;
    })
    .on('end', () => {
      console.log(results);

      return cb(results);
    });
}

module.exports.getAllSelectedMajlisFiles = (cb) => {
  readCSV('assets/wedding/majlis_3.csv', (selectedPictures) => {
    _.forEach(selectedPictures, (picture) => {
      console.log(picture);
      fs.copyFileSync(picture, 'shortlisted/' + picture);
    });
  });
};

!module.parent && module.exports(process.exit);

