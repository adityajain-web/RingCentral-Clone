import React from 'react';
import { Box, IconButton, makeStyles } from '@material-ui/core';
import { SendOutlined } from '@ant-design/icons';
import { ImAttachment } from 'react-icons/im';
import { FaImages } from 'react-icons/fa';
import { AiOutlineCode, AiOutlineSmile } from 'react-icons/ai'

const useStyles = makeStyles(theme => ({
    root: { display: "flex" }
}))

const MessageForm = () => {
    const classes = useStyles()
    return (
        <>
            <Box style={{ borderTop: "1px solid lightgrey", borderBottom: "1px solid lightgrey", }}>
                <Box>
                    <IconButton><ImAttachment /></IconButton>
                    <IconButton><FaImages /></IconButton>
                    <IconButton><AiOutlineCode /></IconButton>
                    <IconButton><AiOutlineSmile /></IconButton>
                </Box>
                <Box className={classes.root} py={2} px={2}>
                    <input type="text" placeholder='Message' className='form-control' multiple />
                    <IconButton>
                        <SendOutlined />
                    </IconButton>
                </Box>
            </Box>
        </>
    )
}

export default MessageForm
