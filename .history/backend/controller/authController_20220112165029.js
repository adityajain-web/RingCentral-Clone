const formidable = require('formidable');
const validator = require('validator');
const registerModel = require('../models/authModel')
const fs = require('fs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.userRegister = (req, res) => {
    const form = new formidable.IncomingForm();
    form.on('file', function (name, file) { });
    form.on('error', function (err) { });
    form.on('aborted', function () { });
    form.parse(req, async (err, fields, files) => {
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

        if (error.length > 0) {
            res.status(400).json({ error: { errorMessage: error } })
        } else {
            const getImageName = image.originalFilename;
            const randomNumber = Math.floor(Math.random() * 99999);
            const newImageName = randomNumber + getImageName;
            image.originalFilename = newImageName;
            const newPath = __dirname + `../../../frontend/public/image/${image.originalFilename}`;

            try {
                const checkUser = await registerModel.findOne({ email });
                if (checkUser) {
                    res.status(400).json({ error: { errorMessage: "email already exist...!" } })
                } else {
                    fs.copyFile(image.filepath, newPath, async (error) => {
                        if (!error) {
                            const userCreate = await registerModel.create({
                                username,
                                email,
                                pass: await bcrypt.hash(pass, 10),
                                image: files.image.originalFilename
                            })
                            const token = jwt.sign({
                                id: userCreate._id,
                                email: userCreate.email,
                                username: userCreate.username,
                                image: userCreate.image,
                                registerTime: userCreate.createAt
                            }, process.env.SECRET, { expiresIn: process.env.TOKEN_EXP });

                            const options = {
                                expires: new Date(Date.now() + process.env.COOKIE_EXP * 24 * 60 * 60 * 1000),
                            }

                            res.status(201).cookie('authToken', token, options).json({
                                successMessage: "Registration done...!",
                                token
                            })
                            console.log('register success')
                        } else {
                            res.status(500).json({ error: { errorMessage: "Internal server error" } })
                        }
                    })
                }
            } catch (error) {
                console.log(error)
            }
        }
    })
}