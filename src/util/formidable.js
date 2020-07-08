const formidable = require('formidable');





const formid = formidable.IncomingForm();
formid.keepExtensions = true;
formid.maxFileSize = 5 * 1024 * 1024;
// formid.uploadDir = './public/uploads';


module.exports = {
  formid
}