import React from 'react';
import { Container, Grid, Box, makeStyles } from '@material-ui/core';
import { Header, ChatList, ChatFeed, ChatSetting } from './Components';

const useStyles = makeStyles(theme => ({
    root: { height: "91.64vh", width: "100%", overflow: "hidden", padding: 0 },
    chatItems: { height: "91.64vh", overflow: "hidden", borderRight: "1px solid lightgrey" },
    bgSideBar: { backgroundColor: "#f9f9f9" }
}))

const Messenger = () => {
    const classes = useStyles();
    return (
        <>
            <Header />
            <Container maxWidth="xl" className={classes.root}>
                <Grid container>
                    <Grid item xs={12} md={2}>
                        <Box className={`${classes.chatItems} ${classes.bgSideBar}`}>
                            <ChatList />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Box className={classes.chatItems}>
                            <ChatFeed />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Box className={`${classes.chatItems} ${classes.bgSideBar}`}>
                            <ChatSetting />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Messenger
