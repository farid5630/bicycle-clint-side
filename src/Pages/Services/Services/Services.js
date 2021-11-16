import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Service from '../Service/Service';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('https://frozen-spire-29237.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
    return (
        <Box>
            <Header></Header>
            <Container sx={{mb: 8}}> 
            <Typography variant="h4" sx={{mt: 4, color: "info.main"}} >
                Our All Bicycle
                <hr />
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        ></Service>)
                }

            </Grid>
            </Container>
            <Footer></Footer>
        </Box>
    );
};

export default Services;