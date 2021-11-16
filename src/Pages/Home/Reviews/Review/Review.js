import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Review = ({review}) => {
    const {name, comment, img} = review;
    return (
       
           <Grid item xs={12} sm={4} md={4}>
            <Card sx={{ maxWidth: 345, }} style={{borderRadius: "15px"}}>
                <CardMedia
                    component="img"
                    height="200"
                    image={img}
                    sx={{ width: "50%", m:"auto", borderRadius:"50%"}}
                    alt="Paella dish"
                />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {comment}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        
    );
};

export default Review;