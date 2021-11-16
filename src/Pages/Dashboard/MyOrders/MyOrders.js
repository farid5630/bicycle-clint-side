import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [control, setControl] = useState(false);
    const {user} = useAuth();
    const email = user?.email;

    useEffect(()=> {
        fetch(`https://frozen-spire-29237.herokuapp.com/myOrders/${email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    }, [control])

    // delect msthod
    const handleDelete = (id) => {
        fetch(`https://frozen-spire-29237.herokuapp.com/cancel/${id}`, {
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount) {
                setControl(!control);
            } 
        })
    }

    return (
        <Container>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    myOrders.map(orders => (
                        <Grid item xs={12} sm={4} md={4}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image={orders?.img}
                                    sx={{w:"75%", m:"auto"}}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {orders?.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                   Price: {orders?.price} tk
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{m:"auto"}}>
                                    {/* <Button size="small">Share</Button> */}
                                    <Button onClick={()=>handleDelete(orders?._id)} size="small" variant="contained" >Cancel</Button>
                                </CardActions>
                                </Card>
                        </Grid>
                   ))
                }
            </Grid>
        </Container>
    );
};

export default MyOrders;