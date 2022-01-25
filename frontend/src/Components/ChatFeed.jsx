import React from 'react';
import { Box, List, makeStyles } from '@material-ui/core';
import { ChatHeader, MessageForm, Message } from './Components';

const useStyles = makeStyles(theme => ({
    chatContainer: { height: "65vh", background: "#fff", overflowY: "auto" }
}))

const ChatFeed = ({ currentFriend, sendMessage, messages, scrollRef, imageSend, activeUser, fileSend, isTyping, typingMessage }) => {
    const classes = useStyles();
    return (
        <>
            <Box>
                <ChatHeader currentFriend={currentFriend} activeUser={activeUser} />
                <Box className={classes.chatContainer}>
                    <List>
                        {messages.map(message => {
                            return <Message key={`msg_${message._id}`} message={message} scrollRef={scrollRef} />
                        })}
                    </List>
                </Box>
                <MessageForm sendMessage={sendMessage} imageSend={imageSend} fileSend={fileSend} isTyping={isTyping} typingMessage={typingMessage} currentFriend={currentFriend} />
            </Box>
        </>
    )
}

export default ChatFeed
