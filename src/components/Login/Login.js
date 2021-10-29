import React from 'react';
// import AuthProvider from '../../context/AuthProvider';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle, user, logout } = useFirebase();
    return (
        <div>
            {
                  user.email ?
                  <button onClick={logout}>Log Out</button>
                  :
                  <button onClick={signInUsingGoogle}>Login</button>
                }
        </div>
    );
};

export default Login;