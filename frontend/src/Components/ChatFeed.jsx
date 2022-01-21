import React from 'react';
import { Box, List, makeStyles } from '@material-ui/core';
import { ChatHeader, MessageForm, Message } from './Components';

const useStyles = makeStyles(theme => ({
    chatContainer: { height: "65vh", background: "#fff", overflowY: "auto" }
}))

const ChatFeed = ({ currentFriend, sendMessage, messages, scrollRef, imageSend }) => {
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
                <MessageForm sendMessage={sendMessage} imageSend={imageSend} />
            </Box>
        </>
    )
}

export default ChatFeed
