import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://frozen-spire-29237.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('review successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-service" sx={{borderColor: 'primary.main', p:4}}>
            <h2>Add Your Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("comment")} placeholder="Your comment here" />
                <input {...register("img")} placeholder="Your bike image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddReview;