import React, { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({children}) => {
    
    const {logged} = useContext(AuthContext);
    const {pathname, search} = useLocation(AuthContext);
    
    const lastPath = pathname+search;
    localStorage.setItem('lastPath', lastPath);
    console.log("graba", lastPath );
    
  return (logged)
    ? children
    : <Navigate to = "/login" />;
}


