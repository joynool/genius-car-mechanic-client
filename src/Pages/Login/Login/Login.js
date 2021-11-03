import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () =>
{
    const { loginUsingGoogle, setIsLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleGoogleLogin = () =>
    {
        loginUsingGoogle()
            .then(result =>
            {
                history.push(location.state.from || '/home')
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;