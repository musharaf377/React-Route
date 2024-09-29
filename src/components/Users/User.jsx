import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const User = ({user}) => {

    const navigate = useNavigate();

    const clickHandeler = () => {
        navigate(`/user/${user.id}`)
    }


    return (
        <div className='border-orange-700 border'>
            <h2>Name: {user.name} </h2>
            <p>Email: {user.email}</p>
            <Link className='btn btn-secondary' to={`/user/${user.id}`}>Details</Link>
            <button onClick={clickHandeler}>details user</button>
        </div>
    );
};

export default User;