import React, { useState } from 'react';
import { Box, IconButton, makeStyles } from '@material-ui/core';
import { SendOutlined } from '@ant-design/icons';
import { ImAttachment } from 'react-icons/im';
import { FaImages } from 'react-icons/fa';
import { AiOutlineCode, AiOutlineSmile } from 'react-icons/ai'

const useStyles = makeStyles(theme => ({
    root: { display: "flex" }
}))

const MessageForm = ({ sendMessage }) => {
    const [message, setMessage] = useState("")
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
                <Box py={2} px={2}>
                    <form onSubmit={(e) => { e.preventDefault(); sendMessage(message) }}>
                        <Box className={classes.root}>
                            <input type="text" placeholder='Message' className='form-control' multiple onChange={(e) => setMessage(e.target.value)} value={message} />
                            <IconButton type='submit'>
                                <SendOutlined />
                            </IconButton>
                        </Box>
                    </form>
                </Box>
            </Box>
        </>
    )
}

export default MessageForm
