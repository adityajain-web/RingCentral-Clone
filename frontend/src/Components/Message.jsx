import React from 'react';
import { ListItem, Avatar } from '@material-ui/core';

const Message = () => {
    return (
        <>
            <ListItem style={{ marginBottom: "1rem" }}>
                <div className="media">
                    <Avatar style={{ marginRight: "1rem" }}>AJ</Avatar>
                    <div className="media-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className='mt-0' style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#121212", lineHeight: "1.5rem" }}>Aditya Jain</h5>
                            <p>{new Date().toLocaleTimeString()}</p>
                        </div>
                        <p style={{ fontSize: "0.9375rem", color: "#121212", fontWeight: 400, lineHeight: "1.5rem" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore voluptatibus incidunt vel numquam rerum velit impedit dolor eveniet ea iusto, veniam facere aspernatur sit quasi, id veritatis commodi esse doloribus!</p>
                    </div>
                </div>
            </ListItem>
        </>
    )
}

export default Message