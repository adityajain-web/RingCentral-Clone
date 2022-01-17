import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    videoFluid: { width: "100%", height: "100vh", objectFit: "cover" },
}))

const Video = () => {
    const classes = useStyles();
    return (
        <>
            <Box>
                <video autoPlay muted loop className={classes.videoFluid}>
                    <source src="https://pritams2.sg-host.com/Comics/teams2.mp4" type="video/mp4"></source>
                </video>
            </Box>
        </>
    )
}

export default Video
