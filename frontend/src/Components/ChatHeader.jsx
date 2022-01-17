import React from 'react';
import { Box, Typography, IconButton, makeStyles } from '@material-ui/core';
import { MoreOutlined } from '@ant-design/icons';

const useStyles = makeStyles(theme => ({
    root: { display: "flex", justifyContent: "space-between", boxShadow: "none", borderRadius: "none", borderBottom: "1px solid lightgrey", backgroundColor: "#fff" },
    head: { fontSize: "1.25rem", fontWeight: 600 }
}))

const ChatHeader = () => {
    const classes = useStyles();
    return (
        <>
            <Box py={1} px={2} className={`${classes.root}`} >
                <Typography variant='h6' className={classes.head}>Programming Team</Typography>
                <IconButton>
                    <MoreOutlined />
                </IconButton>
            </Box>
        </>
    )
}

export default ChatHeader
