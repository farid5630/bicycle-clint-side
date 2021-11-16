import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import login from '../../images/login.png'

const Login = () => {

    const [loginData, setLoginData] = useState({})
    const {user, loginUser, isLoading, loginWithGoogle, authError} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }


    const handleLoginSubmit = e => {

        loginUser(loginData.email, loginData.password, location, history );
        e.preventDefault();
    } 

    const handleGoogleLogin = () => {
        loginWithGoogle(location, history)
    }
    return(
        <Container>
         <Grid container  spacing={2}>
            <Grid sx={{mt:10}} item xs={12} md={6}>
                <Typography variant="body1">
                    Login
                </Typography>
                <form onSubmit={handleLoginSubmit}>
                <TextField 
                sx={{width:'75%', m:2}}
                id="standard-basic" 
                label="your Email" 
                name="email"
                onBlur={handleOnChange}
                variant="standard" />
                <TextField 
                sx={{width:'75%', m:3}}
                id="standard-basic" 
                label="Password"
                name="password" 
                onBlur={handleOnChange}
                type="password"
                variant="standard" />

                <Button sx={{width:"75%"}} type="submit" variant="contained">Login</Button>

                <NavLink 
                    style={{ textDecoration: 'none' }}
                    to="/register">
                    <Button variant="text">New User? Please Register</Button>
               </NavLink>
                
                </form>
                {isLoading && <CircularProgress/>}
               {user?.email && <Alert severity="success">user Created Success alert - chect oi out! </Alert>}
               {authError && <Alert severity="error">{authError}</Alert>}
               
               <Button onClick={handleGoogleLogin} variant="text">Google sign in</Button>

            </Grid>
            <Grid item xs={12} md={6}>
                {/* <img style={{ width: '100%' }}  src={login} alt="" /> */}
            </Grid>
         </Grid>
        </Container>

    );
}

export default Login;