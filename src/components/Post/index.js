import { Button } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';


function WritePost() {

    const account = useSelector(state => state.account);
    const isAuthenticated = !!account.user;

    return isAuthenticated && <Button color="primary" variant="contained"> Novo Post </Button>

}

export default WritePost;