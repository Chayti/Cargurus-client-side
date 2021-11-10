import { Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import './Login.css';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { Box } from '@mui/system';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Box>
            <Grid container className="login-box" spacing={2}>
                <Grid className="front-bg-login-page" item>
                    <Typography variant="h4" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>

                        <NavLink style={{ textDecoration: 'none' }} to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>

                        {isLoading && <div className="d-flex justify-content-center"><CircularProgress /></div>}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}

                        {authError && <Alert severity="error">{authError}</Alert>}

                    </form>
                    <p>------------------------</p>

                    <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Login;