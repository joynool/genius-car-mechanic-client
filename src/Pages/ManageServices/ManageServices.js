import React, { useEffect, useState } from 'react';

const ManageServices = () =>
{
    const [services, setServices] = useState([]);
    useEffect(() =>
    {
        fetch('https://morning-journey-31168.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const handleDelete = id =>
    {
        fetch(`https://morning-journey-31168.herokuapp.com/services/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data =>
            {
                if (data.deletedCount > 0) {
                    alert('Successfully Deleted');
                    const restServices = services.filter(service => service._id !== id);
                    setServices(restServices);
                }
            })
    }

    return (
        <div>
            <h2>Manage services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={() => handleDelete(service._id)} className="btn btn-outline-secondary">Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;