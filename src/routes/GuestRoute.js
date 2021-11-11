import React from 'react';
import { useSelector } from 'react-redux';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn'

function GuestRoute() {
    const userState = useSelector(state => state.account);
    const isAuthenticated = Boolean(userState.user);

    return <>{isAuthenticated ? <Home /> : <SignIn />}</>;
}

export default GuestRoute;