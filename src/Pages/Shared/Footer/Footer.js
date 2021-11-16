import React from 'react';
import {Container, Grid, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <Container style={{backgroundColor:"black", color:"white"}}>
             <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12} sm={4} md={4}>
                        <Typography variant="h4">
                            About Us 
                            <hr />
                        </Typography>
                        <Typography>
                        Bicycle is the first and largest web portal about bicycle in Bangladesh. We have started our journey on 23rd August, 2013. We publish bike specifications, price, news, tips, reviews, showroom address and brand details etc. Our basic goal is to provide bicycle related essential data to the visitors in easy way
                        </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                        <Typography variant="h4">
                            Menu
                            <hr />
                        </Typography>
                        
                        <NavLink to="/" style={{ textDecoration: 'none', color:'white'}}><Button color="inherit">Home</Button></NavLink><br />
                        <NavLink to="/services" style={{ textDecoration: 'none', color:'white'}}><Button color="inherit">Service</Button></NavLink><br />
                        <NavLink to="/dashboard" style={{ textDecoration: 'none', color:'white'}}><Button color="inherit">Dashboard</Button></NavLink><br />
                        
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Typography variant="h4">
                        Social Network
                        <hr />
                    </Typography>
                </Grid>
            </Grid>
        <Typography>
            copyright by 
        </Typography>
        </Container>
    );
};

export default Footer;