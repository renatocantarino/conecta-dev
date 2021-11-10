import React from 'react';
import { Route } from 'react-router-dom';



import Home from '../pages/Home';
import authService from '../services/auth/signInService';

function GuestRoute({ element: Component }) {
    return <Route element={authService.isAuthenticated() ? <Home /> : Component} />;


}

export default GuestRoute;