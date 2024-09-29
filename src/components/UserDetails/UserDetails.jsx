import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const {name, email, phone} = user;
    const navigate = useNavigate();
    
    const clickBackHandler = ()=> {
        navigate(-1)
    }

    return ( 
        <div>
            <h1>Name: {name}</h1>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <button onClick={clickBackHandler}>Back</button>
        </div>
    );
};

export default UserDetails;