import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () =>
{
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>
    {
        axios.post('https://morning-journey-31168.herokuapp.com/services', data)
            .then(res =>
            {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })

    };

    return (
        <div>
            <h2>Please add a service</h2>
            <form className="d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control w-25 mb-3" {...register("name", { required: true })} placeholder="service name" />
                <input className="form-control w-25 mb-3" type="number" {...register("price")} placeholder="service price" />
                <textarea className="form-control w-25 mb-3" {...register("description", { required: true })} placeholder="service description" />
                <input className="form-control w-25 mb-3" {...register("img")} placeholder="image url" />
                <input type="submit" className="btn btn-secondary" />
            </form>
        </div>
    );
};

export default AddService;