import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle, user, logout } = useFirebase();
    return (
        <div className='login'>
            <h3>Please Login</h3>
            <h5>Sign in with Google</h5>
            {
                  user.email ?
                  <button onClick={logout}>Log Out</button>
                  :
                  <button onClick={signInUsingGoogle}>Google SignIn</button>
                }
        </div>
    );
};

export default Login;