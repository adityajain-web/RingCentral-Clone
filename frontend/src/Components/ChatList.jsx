import React, { useState } from 'react';
import { Box, Typography, List, makeStyles } from '@material-ui/core';
import { UserOutlined, TeamOutlined } from '@ant-design/icons';
import { Friend, ChatListSecHead } from './Components';

const useStyles = makeStyles(theme => ({
    sec: { height: "45.7vh", borderBottom: "1px solid lightgrey" },
    activeFriends: { height: "35vh", overflowY: "auto", padding: "0.2rem", overflowX: "hidden" },
}))

const ChatList = ({ friends, getCurrentFriend, currentFriend }) => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.sec}>
                <ChatListSecHead head="Direct Message" icon={UserOutlined} />
                <Box className={classes.activeFriends}>
                    <List>
                        {friends && friends.length > 0 ? friends.map(friend => {
                            return <Friend friend={friend} currentFriend={currentFriend} getCurrentFriend={getCurrentFriend} />
                        }) : null}
                    </List>
                </Box>
            </Box>
            <Box className={classes.sec}>
                <ChatListSecHead head="Teams" icon={TeamOutlined} />
                <Box className={classes.activeFriends}>
                    <List>

                    </List>
                </Box>
            </Box>
        </>
    )
}

export default ChatList
