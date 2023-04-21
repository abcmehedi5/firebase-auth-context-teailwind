import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    if (loading) {
        return <progress className="progress progress-error w-56" value="100" max="100"></progress>
    }if (user) {
        return children
    }
    return <Navigate to={'/login'} replace = {true}></Navigate>
};

export default PrivateRouter;