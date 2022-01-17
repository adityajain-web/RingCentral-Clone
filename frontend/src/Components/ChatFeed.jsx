import React from 'react';
import { Box, List, makeStyles } from '@material-ui/core';
import { ChatHeader, MessageForm, Message } from './Components';

const useStyles = makeStyles(theme => ({
    chatContainer: { height: "65vh", background: "#fff", overflowY: "auto" }
}))

const ChatFeed = () => {
    const classes = useStyles();
    return (
        <>
            <Box>
                <ChatHeader />
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
                <MessageForm />
            </Box>
        </>
    )
}

export default ChatFeed
