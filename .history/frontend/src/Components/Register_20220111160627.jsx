import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { userRegister } from '../store/action/authAction';
import { Container, Grid, Box, Card, CardContent, Button, Typography, makeStyles } from '@material-ui/core';
import { Video } from './Components'

const useStyles = makeStyles(theme => ({
    root: { padding: 0, margin: 0 },
    centerBox: { height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" },
    pageHead: { fontSize: "1.3rem", letterSpacing: "2px", color: theme.palette.grey[600], overflow: "hidden" },
    submitBtn: { backgroundColor: "#18b78f", color: "#fff", '&:hover': { backgroundColor: "#13a17d" } },
}))

const Register = () => {
    const [state, setState] = useState({
        username: "",
        email: "",
        pass: "",
        cPass: "",
        image: ""
    });

    const [loadImage, setLoadImage] = useState('');

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleFileChange = (e) => {
        if (e.target.files.length !== 0) {
            setState({
                ...state,
                [e.target.name]: e.target.value
            })
        }

        const reader = new FileReader();

        reader.onload = () => {
            setLoadImage(reader.result)
        }

        reader.readAsDataURL(e.target.files[0])
    }

    const handleOnCreateAccount = (e) => {
        e.preventDefault();
        const {username, email, pass, cPass, image} = state;
        const formData = new FormData()
        formData.append('username', username);
        formData.append('email', email);
        formData.append('pass', pass);
        formData.append('cPass', cPass);
        formData.append('image', image);
        dispatch(userRegister(formData))
    }

    const classes = useStyles();
    return (
        <>
            <Container maxWidth="xl" className={classes.root} >
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <Box className={classes.centerBox} >
                            <Card style={{ width: "70%" }}>
                                <CardContent>
                                    <Box>
                                        <Box py={3}>
                                            <Typography align='center' variant='h1' className={classes.pageHead} gutterBottom>SIGN IN <span style={{ color: "rgb(71, 215, 172)" }}>FOR FREE</span></Typography>
                                        </Box>
                                        <Box>
                                            <form onSubmit={handleOnCreateAccount}>
                                                <Box className="form-group">
                                                    <label htmlFor="username">Username</label>
                                                    <input type="text" className="form-control" placeholder="Username" name='username' onChange={handleInputChange} value={state.username} autoComplete='on' required />
                                                </Box>
                                                <Box className="form-group">
                                                    <label htmlFor="email">Email</label>
                                                    <input type="email" className="form-control" placeholder="Email" name='email' onChange={handleInputChange} value={state.email} autoComplete='on' required />
                                                </Box>
                                                <Box className="form-group">
                                                    <label htmlFor="password">Password</label>
                                                    <input type="password" className="form-control" placeholder="Password" name='pass' onChange={handleInputChange} value={state.pass} autoComplete='on' required />
                                                </Box>
                                                <Box className="form-group">
                                                    <label htmlFor="confirm-password">Confirm Password</label>
                                                    <input type="password" className="form-control" placeholder="Confirm Password" name='cPass' onChange={handleInputChange} value={state.cPass} autoComplete='on' required />
                                                </Box>
                                                <Box className="form-group d-flex">
                                                    <Box style={{ width: loadImage ? "50%" : "0%" }}>
                                                        {loadImage ? <img src={loadImage} className='img-fluid' alt='' /> : null}
                                                    </Box>
                                                    <input type="file" className="form-control" placeholder="Image" name='image' onChange={handleFileChange} value={state.image} accept='image/*' autoComplete='on' required />
                                                </Box>
                                                <Box className="form-group">
                                                    <Button type='submit' variant='contained' className={classes.submitBtn}>Sign Up</Button>
                                                </Box>
                                            </form>
                                        </Box>
                                        <Box>
                                            <Typography align='center'>Already have an account ? <Link style={{ color: "rgb(71, 215, 172)", textDecoration: "none" }} to="/messenger/login">Log in</Link></Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Video />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Register
