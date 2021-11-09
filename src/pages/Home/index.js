import React from 'react'
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container } from '@material-ui/core';
import Feed from '../../components/Feed';

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