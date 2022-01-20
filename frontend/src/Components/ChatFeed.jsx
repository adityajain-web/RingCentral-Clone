import React from 'react';
import { Box, List, makeStyles } from '@material-ui/core';
import { ChatHeader, MessageForm, Message } from './Components';

const useStyles = makeStyles(theme => ({
    chatContainer: { height: "65vh", background: "#fff", overflowY: "auto" }
}))

const ChatFeed = ({ currentFriend, sendMessage }) => {
    const classes = useStyles();
    return (
        <>
            <Box>
                <ChatHeader currentFriend={currentFriend} />
                <Box className={classes.chatContainer}>
                    <List>
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                    </List>
                </Box>
                <MessageForm sendMessage={sendMessage} />
            </Box>
        </>
    )
}

export default ChatFeed
