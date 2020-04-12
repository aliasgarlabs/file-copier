const FileCopier = require('./lib/fileCopier');
const Logger = require('./logger');

FileCopier.copy().then().catch((err) => {
  Logger.error(err);
});
