import { Container, Table, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    
    const [services, setServices] = useState([]);
    const [control, setControl] = useState(false);

    useEffect( () => {
        fetch('https://frozen-spire-29237.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    // delete option
    const handleCicleDelete = (id) => {
        fetch(`https://frozen-spire-29237.herokuapp.com/cicleDelete/${id}`, {
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
            <Typography variant="h4">
                Manage All Bycicle.
            </Typography>
            <Table style={{border:"1px solid black"}}>
                <thead style={{border:"1px solid black"}}>
                    <tr>
                        <th style={{border:"1px solid black"}}>#</th>
                        <th style={{border:"1px solid black"}}>Service Title</th>
                        <th style={{border:"1px solid black"}}>Price</th>
                        <th style={{border:"1px solid black"}}>Image Link</th>
                        <th style={{border:"1px solid black"}}>Action</th>
                    </tr>
                </thead>
                {services?.map((service, index) => (
                    <tbody>
                        <tr>
                            <td style={{border:"1px solid black"}}>{index}</td>
                            <td style={{border:"1px solid black"}}>{service?.name}</td>
                            <td style={{border:"1px solid black"}}>{service?.price}</td>
                            <td style={{border:"1px solid black"}}>{service?.img}</td>
                            <button onClick={()=> handleCicleDelete(service?._id)} variant="contained">Delete</button>
                        </tr>
                    </tbody> 
                ))}
            </Table>
        </Container>
    );
};

export default ManageProduct;