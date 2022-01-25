import React, { useState } from 'react';
import { Box, IconButton, makeStyles } from '@material-ui/core';
import Picker from 'emoji-picker-react'
import { SendOutlined } from '@ant-design/icons';
import { ImAttachment } from 'react-icons/im';
import { FaImages } from 'react-icons/fa';
import { AiOutlineCode, AiOutlineSmile } from 'react-icons/ai'

const useStyles = makeStyles(theme => ({
    root: { display: "flex" }
}))

const MessageForm = ({ sendMessage, imageSend, fileSend, isTyping, typingMessage, currentFriend }) => {
    const [message, setMessage] = useState("")
    const classes = useStyles()

    return (
        <>
            <Box style={{ borderTop: "1px solid lightgrey", borderBottom: "1px solid lightgrey", }} id="message_form" >
                <Box>
                    <label htmlFor="">
                        <input type="file" name="file" onChange={(e) => imageSend(e.target.files[0])} accept="image/*" />
                        <FaImages className='text-dark' />
                    </label>
                    <IconButton><AiOutlineCode /></IconButton>
                </Box>
                <Box py={2} px={2}>
                    <form onSubmit={(e) => { e.preventDefault(); sendMessage(message); setMessage("") }}>
                        <Box className={classes.root}>
                            <input type="text" placeholder='Message' className='form-control' multiple onChange={(e) => { setMessage(e.target.value); isTyping(true, e) }} value={message} />
                            <IconButton type='submit'>
                                <SendOutlined />
                            </IconButton>
                        </Box>
                    </form>
                    {
                        typingMessage && typingMessage.receiverId === currentFriend._id ? <Box className='typing-message' pt={1}>
                            <small style={{ fontSize: "0.75rem" }} className='text-secondary'>{currentFriend.username} is typing...</small>
                        </Box> : null
                    }
                </Box>
            </Box>
        </>
    )
}

export default MessageForm
