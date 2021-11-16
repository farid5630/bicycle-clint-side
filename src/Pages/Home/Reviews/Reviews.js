import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from './Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( ()=> {
        fetch('https://frozen-spire-29237.herokuapp.com/reviews')
        .then(res=> res.json())
        .then(data => setReviews(data));
    }, [] )
    return (
        <Container sx={{my: 6, bgcolor: 'text.disabled', pb: 4}} style={{color: 'white'}}>
            <Typography variant="h4" sx={{py:8}}>
             Our lovely <span style={{color:"red"}}>Customers</span> say
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                {
                   reviews.map(review => <Review 
                   key={review._id}
                   review={review}
                   ></Review>) 
                }

            </Grid>
        </Container>
    );
};

export default Reviews;