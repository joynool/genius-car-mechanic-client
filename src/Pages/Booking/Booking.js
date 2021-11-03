import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';

const Booking = () =>
{
    const { id } = useParams();
    const [service, setService] = useState({});

    useEffect(() =>
    {
        fetch(`https://morning-journey-31168.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [id]);

    const emailRef = useRef();

    const handleBookNow = name =>
    {
        const email = emailRef.current.value;

        axios.post('https://morning-journey-31168.herokuapp.com/orders', { name, email })
            .then(res =>
            {
                if (res.data.insertedId) {
                    alert('Your order added successfully');
                    emailRef.current.value = '';
                };
            });
    };

    return (
        <div className="container w-50 p-5">
            <div className="card">
                <h2>{service.name}</h2>
                <h4>{service.price}</h4>
                <p>{service.description}</p>
                <img src={service.img} alt="" />
                <div className="d-flex justify-content-center align-items-center m-2">
                    <input type="email" ref={emailRef} className="form-control me-2" placeholder="Enter your email" />
                    <Button onClick={() => handleBookNow(service.name)} variant="outline-success">BOOK</Button>
                </div>
            </div >
        </div>
    );
};

export default Booking;