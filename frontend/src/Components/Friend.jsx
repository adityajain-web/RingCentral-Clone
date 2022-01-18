import React, { useState } from 'react';
import { Box, ListItem, Badge, Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    indicator: { height: "0.4rem", width: "0.4rem", borderRadius: "50%", zIndex: 2, marginRight: "0.75rem" },
    activeFriends: { height: "35vh", overflowY: "auto", padding: "0.2rem" },
    ListItem: { display: "list-item", padding: 0, marginBottom: "0.4rem" },
    listText: { fontSize: "0.9375rem", color: "#494949", zIndex: 2 },
    listBox: { whiteSpace: "nowrap", height: "2rem", padding: "0px 16px 0px 12px", minHeight: "unset", display: "flex", alignItems: "center", width: "100%", '&:hover': { backgroundColor: "#066fac14" }, '&::selection': { backgroundColor: "#066fac" } }
}))

const Friend = ({ friend }) => {
    console.log()
    const [isActive, setIsActive] = useState(true)
    const classes = useStyles();
    return (
        <>
            <ListItem className={classes.ListItem}>
                <Box className={classes.listBox}>
                    <Badge>
                        <Avatar src={`./image/${friend.image}`} alt={friend.username} style={{ height: "1.5rem", width: "1.5rem", marginRight: "0.5rem" }} />
                    </Badge>
                    <h5 style={{ fontSize: "0.9375rem", color: "#121212", fontWeight: 400 }}>{friend.username}</h5>
                </Box>
            </ListItem>
        </>
    )
}

export default Friend
