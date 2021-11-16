import { Grid, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const CycleDetails = () => {
    const {cycleId} = useParams();
    const [cycle, setCycle] = useState()
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();
    
    

    useEffect( ()=> {
        fetch(`https://frozen-spire-29237.herokuapp.com/${cycleId}`)
            .then(res => res.json())
            .then(data => setCycle(data));
    }, [cycleId] )

    // confirm order
   

    const onSubmit = data => {
        axios.post('https://frozen-spire-29237.herokuapp.com/confirmOrder', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order successfully');
                    reset();
                }
            })
    }

    
    return (
       <Container>
           <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
           <Grid item xs={12} sm={6} md={6} sx={{mt: 5, p: 10 }}>
           <Typography variant="h4">Details of :  {cycle?.name}</Typography><br />
                      <img src={cycle?.img} alt=""  sx={{width:"50%", height:"75%", m:"auto"}}/>
                      <br />
                     <div sx={{m:"auto"}}>
                      <h3>Price : {cycle?.price} tk</h3>
                        <h4>Configuration</h4>
                        <p>{cycle?.configuration}</p>
          
                      {/* <Link to="/placeorder">
                      <div className="btn btn-success">place-order</div></Link> */}
                     </div>
           </Grid>


           <Grid item xs={12} sm={6} md={6} sx={{mt: 5, p: 5}}>               
            <Typography variant="h4" sx={{pb:4}}>Order form</Typography> <hr sx={{pb:4}} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                style={{padding:"10px", margin:"8px", fontSize:"20px", borderRadius:"5px"}}
                {...register("name", { required: true })} 
                defaultValue={cycle?.name}
                
                /> <br />
                <input 
                style={{padding:"10px", margin:"8px", fontSize:"20px", borderRadius:"5px"}}
                {...register("price")}
                defaultValue={cycle?.price} /> <br />
                <input 
                style={{padding:"10px", margin:"8px", fontSize:"20px", borderRadius:"5px"}}
                {...register("email")}
                value={user?.email} /> <br />
                
                <input 
                style={{padding:"10px", margin:"8px", fontSize:"20px", borderRadius:"5px"}}
                {...register("img")}
                defaultValue={cycle?.img} /> <br />
                
                <input 
                style={{padding:"10px", margin:"8px", fontSize:"20px", borderRadius:"5px"}}
                {...register("comments")}
                placeholder="Comments" /> <br />

                <input 
                style={{padding:"10px", margin:"8px", fontSize:"20px", borderRadius:"5px"}}
                type="submit"  value="Order Now"/>
            </form>
        
           </Grid>
       </Grid>
       </Container>
    );
};

export default  CycleDetails;

