const user = require('../models/authModel');
const messageModel = require("../models/messageModal");
const formidable = require('formidable');
const fs = require('fs');

module.exports.getFriends = async (req, res) => {
    const myId = req.myId;
    try {
        const friendGet = await user.find({});
        const filter = friendGet.filter(d => d.id !== myId)
        res.status(200).json({ success: true, friends: filter })
    } catch (error) {
        res.status(500).json({ error: { errorMessage: 'Internal Server Error..!' } })
    }
}

module.exports.messageUploadDB = async (req, res) => {
    const { senderName, senderImage, receiverId, message, sentAt } = req.body;
    const senderId = req.myId;
    try {
        const insertMessage = await messageModel.create({
            senderId,
            senderName,
            senderImage,
            receiverId,
            message: {
                text: message,
                image: ''
            },
            sentAt
        })
        res.status(201).json({
            success: true,
            message: {
                senderId,
                senderName,
                senderImage,
                receiverId,
                message: {
                    text: message,
                    image: ''
                },
                sentAt
            }
        })
    } catch (error) {
        res.status(500).json({ error: { errorMessage: 'Internal Server Error..!' } })
    }
}

module.exports.messageGet = async (req, res) => {
    const myId = req.myId;
    const fdId = req.params.id;
    try {
        let getAllMessage = await messageModel.find({});
        getAllMessage = getAllMessage.filter(m => (m.senderId === myId && m.receiverId === fdId) || (m.senderId === fdId && m.receiverId === myId));
        res.status(200).json({ success: true, message: getAllMessage })
    } catch (error) {
        res.status(500).json({ error: { errorMessage: "Internal server error..!" } })
    }
}

module.exports.imageMessageSend = async (req, res) => {
    const form = formidable();
    form.parse(req, (err, fields, files) => {
        const { senderName, senderImage, receiverId, imageName, sentAt } = fields;

        const newPath = __dirname + `../../../frontend/public/image/${imageName}`;
        const senderId = req.myId;
        files.image.originalFilename = imageName;
        try {
            fs.copyFile(files.image.filepath, newPath, async (error) => {
                if (error) {
                    console.log(error);
                } else {
                    const insertMessage = await messageModel.create({
                        senderId,
                        senderName,
                        senderImage,
                        receiverId,
                        message: {
                            text: '',
                            image: files.image.originalFilename
                        },
                        sentAt
                    })
                }
            })
            res.status(201).json({
                success: true,
                message: {
                    senderId,
                    senderName,
                    senderImage,
                    receiverId,
                    message: {
                        text: '',
                        image: imageName
                    },
                    sentAt
                }
            })
        } catch (error) {
            res.status(500).json({ error: { errorMessage: 'Internal Server Error..!' } })
        }
    })

}