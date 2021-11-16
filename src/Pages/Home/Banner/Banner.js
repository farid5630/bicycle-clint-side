import React from 'react';
import Grid from '@mui/material/Grid';
// import chair from '../../../images/chair.png';
import bg from '../../../images/bg.jpg';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';


const bannerBg = {
    background: `url(${bg})`,
    backgroundSize: 'cover',

}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 550
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'center' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3" sx={{color: 'white',}}>
                            FIND A HIGH QUALITY BIKE AND SHOP NOW
                        </Typography>
                        <Button>Explore Bike</Button>
                        <Button>About Us</Button>
                        
                        
                    </Box>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;