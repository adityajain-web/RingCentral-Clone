import React, { useEffect, useState, useRef } from 'react';
import { Container, Grid, Box, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD
import { io } from 'socket.io-client';
import toast, { Toaster } from 'react-hot-toast'
import { Header, ChatList, ChatFeed, ChatSetting } from './Components';
import { getFriends, messageSend, getMessage, imageMessageSend } from '../store/action/MessengerAction';
import useSound from 'use-sound';
import ReceiverMessageNotification from '../Audio/receive-message.mp3';
import SentMessageNotification from '../Audio/sent-message.mp3'
=======
import { Header, ChatList, ChatFeed, ChatSetting } from './Components';
import { getFriends, messageSend, getMessage } from '../store/action/MessengerAction';
>>>>>>> parent of 840d0e8 (last update 220120221814)

const useStyles = makeStyles(theme => ({
    root: { height: "91.64vh", width: "100%", overflow: "hidden", padding: 0 },
    chatItems: { height: "91.64vh", overflow: "hidden", borderRight: "1px solid lightgrey" },
    bgSideBar: { backgroundColor: "#f9f9f9" }
}))

const Messenger = () => {
    const scrollRef = useRef();
    const classes = useStyles();
    const dispatch = useDispatch();
    const { friends, message } = useSelector(state => state.messenger);
    const { myInfo } = useSelector(state => state.auth);
    const [currentFriend, setCurrentFriend] = useState("");
<<<<<<< HEAD
    const [activeUser, setActiveUser] = useState([]);
    const [socketMessage, setSocketMessage] = useState('');
    const [typingMessage, setTypingMessage] = useState("");
    const [notificationSPlay] = useSound(ReceiverMessageNotification);
    const [sendingSPlay] = useSound(SentMessageNotification)

=======
>>>>>>> parent of 840d0e8 (last update 220120221814)
    const getCurrentFriend = (friend) => {
        setCurrentFriend(friend)
    }

<<<<<<< HEAD
    useEffect(() => {
        socket.current = io('ws://localhost:8000');
        socket.current.on('get-message', (data) => {
            setSocketMessage(data)
        });
        socket.current.on('typingMessageGet', (data) => {
            setTypingMessage(data)
        })
    }, [])

    useEffect(() => {
        socket.current.emit('addUser', myInfo.id, myInfo)
    }, [myInfo])

    useEffect(() => {
        socket.current.on('getUser', (users) => {
            const filterUser = users.filter(u => (u.userId !== myInfo.id))
            setActiveUser(filterUser)
        })
    }, [myInfo.id])

    useEffect(() => {
        if (socketMessage && currentFriend) {
            if (socketMessage.senderName === currentFriend._id && socketMessage.receiverId === myInfo.id) {
                dispatch({
                    type: "SOCKET_MESSAGE",
                    payload: {
                        message: socketMessage,
                    }
                })
            }
        }
        setSocketMessage("")
    }, [currentFriend, myInfo.id, dispatch, socketMessage])

    useEffect(() => {
        if (socketMessage.senderId === currentFriend._id && socketMessage.receiverId === myInfo.id) {
            toast.success(`${socketMessage.senderName} send a new message`)
            notificationSPlay();
        }
    }, [currentFriend, myInfo.id, socketMessage.receiverId, socketMessage.senderId, socketMessage.senderName])

    const isTyping = (typing, event) => {
        if (typing) {
            socket.current.emit('typingMessage', {
                senderId: myInfo.id,
                receiverId: currentFriend._id,
                message: event.target.value
            })
        }
    }

=======
>>>>>>> parent of 840d0e8 (last update 220120221814)
    const sendMessage = (message) => {
        if (message) {
            const data = {
                senderName: myInfo.username,
                senderImage: myInfo.image,
                receiverId: currentFriend._id,
                message: message,
                sentAt: new Date()
            }
            socket.current.emit('sendMessage', {
                senderId: myInfo.id,
                senderName: myInfo.username,
                senderImage: myInfo.image,
                receiverId: currentFriend._id,
                message: {
                    text: message,
                    image: "",
                    file: ""
                },
                sentAt: new Date()
            })
            dispatch(messageSend(data))
            sendingSPlay()
        }
    }

<<<<<<< HEAD
    const imageSend = (image) => {
        if (image) {
            const imageName = image.name;
            const newImageName = Date.now() + imageName;
            const imageFormData = new FormData()
            imageFormData.append('senderName', myInfo.username);
            imageFormData.append('senderImage', myInfo.image);
            imageFormData.append('receiverId', currentFriend._id);
            imageFormData.append('image', image);
            imageFormData.append('sentAt', new Date())
            imageFormData.append('imageName', newImageName);
            dispatch(imageMessageSend(imageFormData))

            socket.current.emit('sendMessage', {
                senderId: myInfo.id,
                senderName: myInfo.username,
                senderImage: myInfo.image,
                receiverId: currentFriend._id,
                message: {
                    text: "",
                    image: image,
                    file: ""
                },
                sentAt: new Date()
            })
        }
        sendingSPlay()
    }

    const fileSend = (file) => {
        console.log(file)
    }

=======
    const imageSend = (file) => {
        console.log(file)
    }

>>>>>>> parent of 840d0e8 (last update 220120221814)
    useEffect(() => {
        dispatch(getFriends())
    }, [dispatch])

    useEffect(() => {
        if (friends && friends.length > 0) {
            setCurrentFriend(friends[0])
        }
    }, [friends])

    useEffect(() => {
        if (currentFriend._id) {
            dispatch(getMessage(currentFriend._id));
        }
    }, [currentFriend._id, dispatch])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [message])

    return (
        <>
            <Header myInfo={myInfo} />
            <Container maxWidth="xl" className={classes.root}>
                <Toaster position={'top-right'} reverseOrder={false} toastOptions={{ fontSize: "1rem", }} />
                <Grid container>
                    <Grid item xs={12} md={2}>
                        <Box className={`${classes.chatItems} ${classes.bgSideBar}`}>
                            <ChatList friends={friends} currentFriend={currentFriend} getCurrentFriend={getCurrentFriend} />
                        </Box>
                    </Grid>
                    {currentFriend ? <><Grid item xs={12} md={8}>
                        <Box className={classes.chatItems} >
<<<<<<< HEAD
                            <ChatFeed currentFriend={currentFriend} sendMessage={sendMessage} messages={message} scrollRef={scrollRef} imageSend={imageSend} activeUser={activeUser} fileSend={fileSend} isTyping={isTyping} typingMessage={typingMessage} />
=======
                            <ChatFeed currentFriend={currentFriend} sendMessage={sendMessage} messages={message} scrollRef={scrollRef} imageSend={imageSend} />
>>>>>>> parent of 840d0e8 (last update 220120221814)
                        </Box>
                    </Grid>
                        <Grid item xs={12} md={2}>
                            <Box className={`${classes.chatItems} ${classes.bgSideBar}`}>
                                <ChatSetting friends={friends} currentFriend={currentFriend} />
                            </Box>
                        </Grid></> : <>
                        <Grid item xs={12} md={10}>
                            <Box className={`${classes.chatItems} d-flex justify-content-center align-items-center flex-column`}>
                                <h1>Hello, {myInfo.username}</h1>
                                <p className='text-secondary'>Please click any of your teammate  to chat with them...!</p>
                            </Box>
                        </Grid>
                    </>}
                </Grid>
            </Container >
        </>
    )
}

export default Messenger
