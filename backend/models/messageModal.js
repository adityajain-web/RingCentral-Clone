const { model, Schema } = require('mongoose');

const messageSchema = new Schema({
    senderId: {
        type: String,
        required: true
    },
    senderName: {
        type: String,
        required: true
    },
    senderImage: {
        type: String,
        required: true
    },
    receiverId: {
        type: String,
        required: true
    },
    message: {
        text: {
            type: String,
            default: ""
        },
        image: {
            type: String,
            default: ""
        }
    },
    sentAt: {
        type: String,
        required: true
    }
}, { timeseries: true })

module.exports = model('message', messageSchema)