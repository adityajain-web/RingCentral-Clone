import React from 'react';
import { Avatar, Badge } from '@material-ui/core';



const GroupMembers = ({ friend }) => {
    return (
        <>
            <Badge variant='dot'><Avatar src={`./image/${friend.image}`} alt={friend.username} sx={{ width: 24, height: 24, }} style={{ marginRight: "0.5rem" }} /></Badge>
        </>
    )
}

export default GroupMembers
