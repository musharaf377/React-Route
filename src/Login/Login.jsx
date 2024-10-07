import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.init';

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const signupHandle = ()=> {
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user);
            
        })
        .catch(error=> {
            console.log('error', error.message);
            
        })
    }
    return (
        <div>
            <button onClick={signupHandle} className='btn button-success'> Google</button>
        </div>
    );
};

export default Login;