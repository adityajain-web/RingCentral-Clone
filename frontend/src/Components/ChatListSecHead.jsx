import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    secHead: { backgroundColor: "#fff", borderBottom: "1px solid lightGrey", },
    head: { fontSize: "1.25rem", fontWeight: 600, },
}))

const ChatListSecHead = ({ head, icon }) => {
    const classes = useStyles();

    return (
        <>
            <Box py={2} px={2} className={classes.secHead} >
                <Typography variant='h6' className={classes.head}>{head}</Typography>
            </Box>
        </>
    )
}

export default ChatListSecHead
