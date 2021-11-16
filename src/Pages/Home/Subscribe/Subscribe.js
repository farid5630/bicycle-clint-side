import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TextField from '@mui/material/TextField';

const Subscribe = () => {
    return (
        <Container sx={{pt:5}}>
            <Typography variant="h4" sx={{my: 3}}>Get Free Offer <span style={{color:"red"}}>Subscribe</span> now</Typography>
            <Typography sx={{ width: "75%", m:"auto" }} variant="h6">
            Rapidiously morph transparent internal or "organic" sources whereas resource sucking e-business. Conveniently innovate compelling internal.
            </Typography>
            <Box style={{ marginBottom:"70px",}} sx={{my:5}}>
            <TextField id="standard-basic" label="Your email" variant="standard" />
            <Button variant="contained" color="success">
                Subscribe
                </Button>
            </Box>
        </Container>
    );
};

export default Subscribe;