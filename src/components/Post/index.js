import { Button } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';


function WritePost() {

    const account = useSelector(state => state.account);
    const isAuthenticated = !!account.user;
    const navigate = useNavigate();
    const HandleClick = () => navigate('/posts/new');

    return isAuthenticated && <Button color="primary" variant="contained" onClick={HandleClick}> Novo Post </Button>

}

export default WritePost;