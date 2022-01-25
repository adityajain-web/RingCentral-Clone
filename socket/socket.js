const io = require('socket.io')(8000, {
    cors: {
        origin: "*",
        methods: ['GET', 'POST']
    }
})

let users = []

const addUser = (userId, socketId, userInfo) => {
    const checkUser = users.some(u => u.userId === userId);
    if (!checkUser) {
        users.push({ userId, socketId, userInfo })
    }
}

const removeUser = (socketId) => {
    users = users.filter(u => u.socketId !== socketId)
}

const findFriend = (id) => {
    return users.find(u => u.userId === id);
}

io.on('connection', (socket) => {
    console.log("user connected.....")
    socket.on('addUser', (userId, userInfo) => {
        addUser(userId, socket.id, userInfo)
        io.emit('getUser', users)
    });

    socket.on('sendMessage', (data) => {
        const user = findFriend(data.receiverId);
        if (user !== undefined) {
            socket.to(user.socketId).emit('get-message', {
                senderId: data.senderId,
                senderName: data.senderName,
                senderImage: data.senderImage,
                receiverId: data.receiverId,
                message: { text: data.message.text, image: data.message.image, file: data.message.file },
                sentAt: data.sentAt
            })
        }
    })

    socket.on('typingMessage', (data) => {
        const user = findFriend(data.receiverId);
        if (user !== undefined) {
            socket.to(user.socketId).emit('isTyping', {
                senderId: data.senderId,
                receiverId: data.receiverId,
                message: { text: data.msg }
            })
        }
    })

    socket.on('disconnect', (socket) => {
        console.log('user disconnect...');
        removeUser(socket.id);
        io.emit('getUser', users)
    });
})