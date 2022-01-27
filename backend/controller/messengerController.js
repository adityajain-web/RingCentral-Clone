const user = require('../models/authModel');
const messageModel = require("../models/messageModal");
<<<<<<< HEAD
<<<<<<< HEAD
const formidable = require('formidable');
const fs = require('fs');

const getLastMessage = async (myId, fdId) => {
    const msg = await messageModel.find({
        $or: [
            {
                $and: [{ senderId: { $eq: myId } }, { receiverId: { $eq: fdId } }]

            }, {
                $and: [{ senderId: { $eq: fdId } }, { receiverId: { $eq: myId } }]
            }
        ]
    }).sort({ updatedAt: -1 })

    return msg;
}

=======
>>>>>>> parent of 840d0e8 (last update 220120221814)
=======
>>>>>>> parent of 840d0e8 (last update 220120221814)
module.exports.getFriends = async (req, res) => {
    const myId = req.myId;
    let frnd_msg = [];
    try {
        const friendGet = await user.find({
            _id: { $ne: myId }
        });

        for (let i = 0; i < friendGet.length; i++) {
            let lastMessage = await getLastMessage(myId, friendGet[i].id);
            frnd_msg = [...frnd_msg, {
                frndInfo: friendGet[1],
                msgInfo:
            }]
        }
        // const filter = friendGet.filter(d => d.id !== myId)
        res.status(200).json({ success: true, friends: friendGet })
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
        let getAllMessage = await messageModel.find({
            $or: [
                {
                    $and: [{ senderId: { $eq: myId } }, { receiverId: { $eq: fdId } }]

                }, {
                    $and: [{ senderId: { $eq: fdId } }, { receiverId: { $eq: myId } }]
                }
            ]
        });
        // getAllMessage = getAllMessage.filter(m => (m.senderId === myId && m.receiverId === fdId) || (m.senderId === fdId && m.receiverId === myId));
        res.status(200).json({ success: true, message: getAllMessage })
    } catch (error) {
        res.status(500).json({ error: { errorMessage: "Internal server error..!" } })
    }
}