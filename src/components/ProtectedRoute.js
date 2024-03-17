import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ component: Component, ...rest }) {
  const isAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem("currentUser")) || {};

    return user.username;
  };

  return (
    isAuthenticated() ? <Component /> :  <Navigate to="/login" replace={true} />
  );
}