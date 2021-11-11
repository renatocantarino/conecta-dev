import React from 'react';
import { useSelector } from 'react-redux';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn'

function GuestRoute() {
    const userState = useSelector(state => state.user);
    const isAuthenticated = Boolean(userState);

    return <>{isAuthenticated ? <Home /> : <SignIn />}</>;
}

export default GuestRoute;