import React, { useEffect, useState, useRef } from 'react';
import { Container, Grid, Box, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Header, ChatList, ChatFeed, ChatSetting } from './Components';
import { getFriends, messageSend, getMessage } from '../store/action/MessengerAction';

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
    const getCurrentFriend = (friend) => {
        setCurrentFriend(friend)
    }

    const sendMessage = (message) => {
        if (message) {
            const data = {
                senderName: myInfo.username,
                senderImage: myInfo.image,
                receiverId: currentFriend._id,
                message: message,
                sentAt: new Date()
            }
            dispatch(messageSend(data))
        }
    }

    const imageSend = (file) => {
        console.log(file)
    }

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
                <Grid container>
                    <Grid item xs={12} md={2}>
                        <Box className={`${classes.chatItems} ${classes.bgSideBar}`}>
                            <ChatList friends={friends} currentFriend={currentFriend} getCurrentFriend={getCurrentFriend} />
                        </Box>
                    </Grid>
                    {currentFriend ? <><Grid item xs={12} md={8}>
                        <Box className={classes.chatItems} >
                            <ChatFeed currentFriend={currentFriend} sendMessage={sendMessage} messages={message} scrollRef={scrollRef} imageSend={imageSend} />
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
