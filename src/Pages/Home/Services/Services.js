import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () =>
{
    const [services, setServices] = useState([]);

    useEffect(() =>
    {
        fetch('https://morning-journey-31168.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div id="services" className="container">
            <h1 className="text-primary m-5 fw-light">Our services</h1>
            <div className="card-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;