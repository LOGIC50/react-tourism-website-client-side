import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle, setUser, setLoading, user, logout } = useAuth();
    let history = useHistory();
    let location = useLocation();

    let {from} = location.state || {from: {pathname: '/'}};
    const handleLogIn = () => {
        signInUsingGoogle()
        .then((result) => {
            history.replaceState(from);
            setUser(result.user);
            setLoading(false);
            })
            .catch((error) => setLoading(false));
    };
    return (
        <div className='login'>
            <h3>Please Login</h3>
            <h5>Sign in with Google</h5>
            
            {
                  user?.email ?
                  <button onClick={logout}>Log Out</button>
                  :
                  <button onClick={handleLogIn}>Google SignIn</button>
             }
        </div>
    );
};

export default Login;