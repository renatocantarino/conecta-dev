import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container } from '@material-ui/core';
import Feed from '../../components/Feed';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UseStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    main: {
        padding: 24,
    },
    toolbar: {
        minHeight: 64,
    },
})


function Home() {
    const navigate = useNavigate();
    const userState = useSelector(state => state.user);
    const [user, setUser] = useState(userState);
    useEffect(() => {
        if (!user) {
            navigate('/sign-in');
        }
    }, [navigate]);


    const classes = UseStyles();
    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.toolbar} />
            <main className={classes.main}>
                <Container maxWidth="lg">
                    <Box display="flex">
                        <NavBar />
                        <Feed />
                    </Box>
                </Container>
            </main>

        </div>
    )
}

export default Home;