import React from 'react';
import { Link } from 'react-router-dom';
import fourOfour from './../../images/404.svg';

const NotFound = () =>
{
    return (
        <div className="mt-5">
            <img className="img-thumbnail" src={fourOfour} alt="" width="900px" />
            <div className="mt-3">
                <Link to="/">
                    <button className="btn btn-outline-primary px-5">Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;