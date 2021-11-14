import React from 'react'
import {
    AppBar,
    Toolbar,
    Box
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import AvatarAccount from '../Avatar';
import NotificationIcon from '../NotificationIcon';
import WritePost from '../Post';


const useStyles = makeStyles({
    appBar: {},
    img: {
        maxHeight: 55,
    },
    grow: {
        flexGrow: 1,
    },
    userSection: {
        display: 'flex',
        alignItems: 'center',
    },
});

function Header() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar>
                <Link to='/'>
                    <img
                        src='/imgs/logo.png'
                        alt="logo"
                        className={classes.img}
                    />
                </Link>

                <div className={classes.grow} />
                <div className={classes.userSection}>
                    <WritePost />
                    <Box ml={2}>
                        <NotificationIcon />
                    </Box>
                    <Box ml={2}>
                        <AvatarAccount />
                    </Box>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
