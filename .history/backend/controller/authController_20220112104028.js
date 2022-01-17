const formidable = require('formidable');
const validator = require('validator');
module.exports.userRegister = (req, res) =>{
    const form =  new formidable.IncomingForm();
    form.on('file', function(name, file) { });
    form.on('error', function(err) { });
    form.on('aborted', function() { });
    form.parse(req,(err, fields, files)=>{
        console.log(files.image)
    })
}