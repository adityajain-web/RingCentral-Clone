const formidable = require('formidable')
module.exports.userRegister = (req, res) =>{
    const form = formidable.IncomingForm;
    form.on('file', function(name, file) { });
    form.on('error', function(err) { });
    form.on('aborted', function() { });
    form.parse(req,(err, fields, files)=>{
        console.log(fields)
    })
}