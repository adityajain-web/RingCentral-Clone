const user = require('../models/authModel');
const messageModel = require("../models/messageModal");
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
    const { senderName, receiverId, message } = req.body;
    const senderId = req.myId;
    console.log(senderId, senderName, receiverId, message)
    try {
        const insertMessage = await messageModel.create({
            senderId,
            senderName,
            receiverId,
            message: {
                text: message,
                image: ''
            }
        })
        res.status(201).json({
            success: true,
            message: {
                senderId,
                senderName,
                receiverId,
                message: {
                    text: message,
                    image: ''
                }
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
        const getAllMessage = await messageModel.find({});
        getAllMessage = getAllMessage.filter(m => m.senderId === myId && m.receiverId === fdId)
        console.log(getAllMessage)
    } catch (error) {

    }

}