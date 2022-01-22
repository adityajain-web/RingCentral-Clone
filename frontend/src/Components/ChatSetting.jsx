import React, { useState } from 'react';
import { Box, IconButton, Collapse, Divider, List, ListItem, Badge, Avatar, ListItemText } from '@material-ui/core';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { GroupMembers } from './Components'

const ChatSetting = ({ friends, currentFriend, activeUser, message, myInfo }) => {
    const [Open, setOpen] = useState(false);
    const [state, setState] = useState(false);
    const [on, setOn] = useState(false);

    let activeUsers = activeUser.filter(user => {
        return user.userInfo !== ""
    })

    return (
        <>
            <Box px={1} py={2}>
                <Box>
                    <Box className='d-flex justify-content-between align-items-center'>
                        <h5 style={{ fontSize: "0.9375rem" }} >Individual Member or Group participant</h5>
                        <IconButton onClick={() => setOpen(!Open)}>{!Open ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}</IconButton>
                    </Box>
                    <Divider style={{ backgroundColor: "darkgrey" }} />
                    <Collapse in={Open}>
                        <Box className='d-flex overflow-scroll mb-3 py-3'>
                            <Badge variant='dot'><Avatar src={`./image/${currentFriend.image}`} /></Badge>
                        </Box>
                    </Collapse>
                </Box>
                <Box mt={2}>
                    <Box className='d-flex justify-content-between align-items-center'>
                        <h5 style={{ fontSize: "0.9375rem" }}>Media</h5>
                        <IconButton onClick={() => setState(!state)}>{!state ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}</IconButton>
                    </Box>
                    <Divider />
                    <Collapse in={state}>
                        <Box style={{ border: "1px solid red", height: "62vh", overflowY: "scroll", overflowX: "none" }}>
                            <List>
                                <ListItem>
                                    <ListItemText primary="File 1.jpg" />
                                </ListItem>
                            </List>
                        </Box>
                    </Collapse>
                </Box>
                <Box mt={2}>
                    <Box className='d-flex justify-content-between align-items-center'>
                        <h5 style={{ fontSize: "0.9375rem" }}>Active Users</h5>
                        <IconButton onClick={() => setOn(!on)}>{!on ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}</IconButton>
                    </Box>
                    <Divider />
                    <Collapse in={on}>
                        <Box className='d-flex overflow-scroll mb-3 py-3'>
                            {
                                activeUsers.map(user => {
                                    return <Badge variant='dot'><Avatar src={`./image/${user.userInfo.image}`} /></Badge>
                                })
                            }
                        </Box>
                    </Collapse>
                </Box>
            </Box>
        </>
    )
}

export default ChatSetting
