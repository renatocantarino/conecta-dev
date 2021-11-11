import React from 'react'
import {
    Button,
    AppBar,
    Toolbar,
    SvgIcon,
    Avatar
} from '@material-ui/core'
import { Bell } from 'react-feather'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux';


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
    const user = useSelector(state => state.user);


    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar>
                <img
                    src='/imgs/logo.png'
                    alt="logo"
                    className={classes.img}
                />

                <div className={classes.grow} />
                <div className={classes.userSection}>
                    <Button color="primary" variant="contained" className={classes.btn}>
                        Novo Post
                    </Button>
                    <Button className={classes.btn}>
                        <SvgIcon>
                            <Bell />
                        </SvgIcon>
                    </Button>
                    <Avatar alt={user && user.username} src="/" />
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
