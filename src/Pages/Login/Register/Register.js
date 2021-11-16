import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory()
    const { user, registerUser, isLoading, authError} = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        // console.log(loginData);
        setLoginData(newLoginData)
    }


    const handleLoginSubmit = e => {

        if(loginData.password !== loginData.password) {
            alert('password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name,  history)
        e.preventDefault();
    } 
    return (
        <Container>
         <Grid container  spacing={2}>
            <Grid sx={{mt:10}} item xs={12} md={6}>
                <Typography variant="body1">
                    Register
                </Typography>
                { !isLoading && <form onSubmit={handleLoginSubmit}>
                <TextField 
                sx={{width:'75%', m:2}}
                id="standard-basic" 
                label="your name"
                name="name"
                onBlur={handleOnBlur}
                variant="standard" />
                <TextField 
                sx={{width:'75%', m:2}}
                id="standard-basic" 
                label="your Email"
                type="email" 
                name="email"
                onBlur={handleOnBlur}
                variant="standard" />
                <TextField 
                sx={{width:'75%', m:3}}
                id="standard-basic" 
                label="Password"
                name="password" 
                onBlur={handleOnBlur}
                type="password"
                variant="standard" />
                <TextField 
                sx={{width:'75%', m:3}}
                id="standard-basic" 
                label="Re-type Password"
                name="password2" 
                onBlur={handleOnBlur}
                type="password"
                variant="standard" />

                <NavLink 
                    style={{ textDecoration: 'none' }}
                    to="/login">
                    <Button variant="text">Already account? Plaease Login</Button>
               </NavLink>

                <Button sx={{width:"75%"}} type="submit" variant="contained">Register</Button>
                </form>}
               {isLoading && <CircularProgress/>}
               {user?.email && <Alert severity="success">user Created Success alert - chect oi out! </Alert>}
               {authError && <Alert severity="error">{authError}</Alert>}
                
            </Grid>
            <Grid item xs={12} md={6}>
                {/* <img style={{ width: '100%' }}  src={login} alt="" /> */}
            </Grid>
         </Grid>
        </Container>
    );
};

export default Register;