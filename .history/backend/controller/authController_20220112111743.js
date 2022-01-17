const formidable = require('formidable');
const validator = require('validator');
module.exports.userRegister = (req, res) => {
    const form = new formidable.IncomingForm();
    form.on('file', function (name, file) { });
    form.on('error', function (err) { });
    form.on('aborted', function () { });
    form.parse(req, (err, fields, files) => {
        const { username, email, pass, cPass } = fields;
        const { image } = files;

        const error = [];

        if (!username) {
            error.push('username should not be empty...!')
        }

        if (!email) {
            error.push('email should not be empty...!')
        }

        if (email && !validator.isEmail(email)) {
            error.push('please provide valid email/...!')
        }

        if (!pass) {
            error.push('password should not be empty...!')
        }

        if (!cPass) {
            error.push('confirm password should not be empty...!')
        }

        if (pass && cPass && pass !== cPass) {
            error.push("your password and confirm password are not same...!")
        }

        if (pass && pass.length < 8) {
            error.push('password must be 8 character...!')
        }

        if (Object.keys(files).length === 0) {
            error.push('please provide user image...!')
        }

        if(error.length > 0){
            res.status(400).json({error:{errorMessage: error}})
        }else{
            const getImageName = image.originalFilename;
            const randomNumber = Math.floor(Math.random()*99999);
            const newImageName = randomNumber+getImageName
            console.log(newImageName)
        }
    })
}