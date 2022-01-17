const formidable = require('formidable');
const validator = require('validator');
module.exports.userRegister = (req, res) =>{
    const form =  new formidable.IncomingForm();
    form.on('file', function(name, file) { });
    form.on('error', function(err) { });
    form.on('aborted', function() { });
    form.parse(req,(err, fields, files)=>{
        const {username, email, pass, cPass} = fields;
        const {image} = files;

        if(!username){
            error.push('username should not be empty...!')
        }

        if(!email){
            err.push('email should not be empty...!')
        }

        if(!pass){
            error.push('password should not be empty...!')
        }

        if(!cPass){
            error.push('confirm password should not be empty...!')
        }
    })
}