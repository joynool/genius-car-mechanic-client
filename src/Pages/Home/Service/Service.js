import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) =>
{
    const { _id, name, price, description, img } = props.service;
    return (
        <div className="card">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>{price}</h4>
            <p>{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Book {name}</button>
            </Link>
        </div >
    );
};

export default Service;