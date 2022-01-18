import React, { useState } from 'react';
import { AppBar, Toolbar, Link, Box, IconButton, Avatar, Popover, Divider, makeStyles } from '@material-ui/core';
import { FaSearch } from 'react-icons/fa'

const useStyles = makeStyles(theme => ({
    header: { backgroundImage: `linear-gradient(to right, #017eaa, #0096b7, #00adbc, #00c3b7, #47d7ac);`, }
}))

const Header = ({ myInfo }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles()
    return (
        <>
            <AppBar position='static' style={{ boxShadow: "none" }}>
                <Toolbar className={classes.header}>
                    <Link href='https://nonstopcorp.com/' className="navbar-brand text-decoration-none text-white" style={{ letterSpacing: "0.5px", fontSize: "1.5rem" }}>NONSTOPCORP</Link>
                    <Box style={{ flexGrow: 1 }} />
                    <Avatar src={`./image/${myInfo.image}`} alt={myInfo.username} onClick={handleClick} />
                    <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}>
                        <Box py={2} px={3} style={{ width: "12rem" }}>
                            <Box className="d-flex justify-content-between align-items-center py-2">
                                <Avatar src={`./image/${myInfo.image}`} alt={myInfo.username} sx={{ width: 24, height: 24 }} />
                                <h5 style={{ fontSize: "1rem" }}>{myInfo.username}</h5>
                            </Box>
                            <Divider />
                        </Box>
                    </Popover>
                    <IconButton>
                        <FaSearch fontSize="medium" />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header
