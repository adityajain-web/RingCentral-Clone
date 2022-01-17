const { model, Schema } = require('mongoose');

const registerSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true,
        select: false
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = model('user', registerSchema)