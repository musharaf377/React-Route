import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    return (
        <div className='border-orange-700 border'>
            <h2>Name: {user.name} </h2>
            <p>Email: {user.email}</p>
            <Link className='btn btn-secondary' to={`/user/${user.id}`}>Details</Link>
        </div>
    );
};

export default User;