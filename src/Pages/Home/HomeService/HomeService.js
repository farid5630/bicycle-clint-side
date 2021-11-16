import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Service from '../../Services/Service/Service';


const HomeService = () => {

    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('https://frozen-spire-29237.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    const sliceService = services.slice(0, 6);
    return (
        <Box>
            <Container> 
            <Typography variant="h4" sx={{my: 5}}>
               Choose Your Bike
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    sliceService.map(service => <Service
                        key={service._id}
                        service={service}
                        ></Service>)
                }

            </Grid>
            </Container>
        </Box>
    );
};

export default HomeService;