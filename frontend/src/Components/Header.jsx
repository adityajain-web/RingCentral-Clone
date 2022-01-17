import React from 'react';
import { AppBar, Toolbar, Link, Box, IconButton, Avatar, makeStyles } from '@material-ui/core';
import { FaSearch } from 'react-icons/fa'

const useStyles = makeStyles(theme => ({
    header: { backgroundImage: `linear-gradient(to right, #017eaa, #0096b7, #00adbc, #00c3b7, #47d7ac);`, }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <>
            <AppBar position='static' style={{ boxShadow: "none" }}>
                <Toolbar className={classes.header}>
                    <Link href='https://nonstopcorp.com/' className="navbar-brand text-decoration-none text-white" style={{ letterSpacing: "0.5px", fontSize: "1.5rem" }}>NONSTOPCORP</Link>
                    <Box style={{ flexGrow: 1 }} />
                    <Avatar>AJ</Avatar>
                    <IconButton>
                        <FaSearch fontSize="medium" />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header
