import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.init';
import { signOut } from 'firebase/auth/cordova';

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);

    const signupHandle = ()=> {
        signInWithPopup(auth, provider)
        .then(result => {
            const loggedInUser = result.user;
            setUser(loggedInUser);
            // console.log(loggedInUser.displayName);
            
            
        })
        .catch(error=> {
            console.log('error', error.message);
            
        })
    }

    const signOutHandle = ()=> {
        signOut(auth)
        .then(result => {
            console.log(result);
            setUser(null);
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            {!user ? <button onClick={signupHandle} className='btn button-success'> Sign in Google</button> :
            <button onClick={signOutHandle} className='btn button-success'> Sign Out</button>}
            {user && <div>User Name: {user.displayName} </div>}
        </div>
    );
};

export default Login;