import React from 'react';
import { Navigate } from 'react-router-dom';

const RouteGuard = ({ children }) => {
  const token = localStorage.getItem('token');
  let isAuthenticated = false;
  if (token) isAuthenticated = true;
  else isAuthenticated = false;

  return isAuthenticated ? children : <Navigate to='/login' />;
};

export default RouteGuard;
