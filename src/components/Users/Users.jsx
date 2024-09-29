import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User';

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            users: {users.length}
            <div className='grid grid-cols-3 gap-4 '>
                {
                    users.map(user=> <User user={user} key={user.name}></User>)
                }
            </div>
        </div>
    );
};

export default Users;