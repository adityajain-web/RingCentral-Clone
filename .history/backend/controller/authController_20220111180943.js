const formidable = require('formidable')
module.exports.userRegister = (req, res) =>{
    const form = formidable;
    form.parse(req,(err, fields, files)=>{
        console.log(fields)
    })
}