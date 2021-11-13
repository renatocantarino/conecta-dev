import React from 'react'
import Header from '../../components/Header';
import { makeStyles } from '@material-ui/core/styles'
import { Routes, Route } from "react-router-dom";
import Feed from '../Feed';

const UseStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    main: { padding: 24, },
    toolbar: { minHeight: 64, },
})


function Home() {

    const classes = UseStyles();
    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.toolbar} />
            <main className={classes.main}>
                <Routes>
                    <Route path="/" element={<Feed />} />
                </Routes>
            </main>
        </div>
    )
}

export default Home;