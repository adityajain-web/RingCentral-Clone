import React from 'react';
import { Box, List, makeStyles } from '@material-ui/core';
import { ChatHeader, MessageForm, Message } from './Components';

const useStyles = makeStyles(theme => ({
    chatContainer: { height: "65vh", background: "#fff", overflowY: "auto" }
}))

<<<<<<< HEAD
<<<<<<< HEAD
const ChatFeed = ({ currentFriend, sendMessage, messages, scrollRef, imageSend, activeUser, fileSend, isTyping, typingMessage }) => {
=======
const ChatFeed = ({ currentFriend, sendMessage, messages, scrollRef, imageSend }) => {
>>>>>>> parent of 840d0e8 (last update 220120221814)
=======
const ChatFeed = ({ currentFriend, sendMessage, messages, scrollRef, imageSend }) => {
>>>>>>> parent of 840d0e8 (last update 220120221814)
    const classes = useStyles();
    return (
        <>
            <Box>
                <ChatHeader currentFriend={currentFriend} />
                <Box className={classes.chatContainer}>
                    <List>
                        {messages.map(message => {
                            return <Message message={message} scrollRef={scrollRef} />
                        })}
                    </List>
                </Box>
                <MessageForm sendMessage={sendMessage} imageSend={imageSend} fileSend={fileSend} isTyping={isTyping} typingMessage={typingMessage} currentFriend={currentFriend} />
            </Box>
        </>
    )
}

export default ChatFeed
