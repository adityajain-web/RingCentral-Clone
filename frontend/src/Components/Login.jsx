import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Grid, Box, Card, CardContent, Button, Typography, makeStyles } from '@material-ui/core';
import { userLogin } from '../store/action/authAction';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { SUCCESS_MESSAGE_CLEAR, ERROR_CLEAR } from '../store/types/authType';
import { Video } from './Components'

const useStyles = makeStyles(theme => ({
    root: { padding: 0, margin: 0 },
    centerBox: { height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" },
    pageHead: { fontSize: "1.3rem", letterSpacing: "2px", color: theme.palette.grey[600], overflow: "hidden" },
    submitBtn: { backgroundColor: "#18b78f", color: "#fff", '&:hover': { backgroundColor: "#13a17d" } }
}))

const Register = () => {
    const alert = useAlert();
    const navigate = useNavigate();
    const { loading, successMessage, error, authenticate, myInfo } = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const [state, setState] = useState({
        email: "",
        pass: ""
    });

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(userLogin(state))
    }

    useEffect(() => {
        if (authenticate) {
            console.log(authenticate)
            navigate("/")
        }
        if (successMessage) {
            dispatch({ type: SUCCESS_MESSAGE_CLEAR });
            return alert.success(successMessage);
        }
        if (error) {
            dispatch({ type: ERROR_CLEAR })
            return alert.error(error)
        }
    }, [successMessage, error, alert, authenticate])

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
                                            <Typography align='center' variant='h1' className={classes.pageHead} gutterBottom>LOG IN <span style={{ color: "rgb(71, 215, 172)" }}>FOR FREE</span></Typography>
                                        </Box>
                                        <Box>
                                            <form onSubmit={handleLogin}>
                                                <Box className="form-group">
                                                    <label htmlFor="email">Email</label>
                                                    <input type="email" className="form-control" placeholder="Email" name='email' value={state.email} onChange={handleInputChange} required />
                                                </Box>
                                                <Box className="form-group">
                                                    <label htmlFor="password">Password</label>
                                                    <input type="password" className="form-control" placeholder="Password" name='pass' autoComplete='on' value={state.pass} onChange={handleInputChange} required />
                                                </Box>
                                                <Box className="form-group">
                                                    <Button type='submit' variant='contained' className={classes.submitBtn}>Log In</Button>
                                                </Box>
                                            </form>
                                        </Box>
                                        <Box>
                                            <Typography align='center'><Link style={{ color: "rgb(71, 215, 172)", textDecoration: "none" }} to="/messenger/register">Create a new account</Link></Typography>
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
