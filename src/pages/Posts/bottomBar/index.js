import React from 'react';
import {
    makeStyles,
    AppBar,
    Toolbar,
    Button
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    AppBar: {
        top: 'auto',
        bottom: 0,
        alignItems: 'center'
    },
    btn: { margin: theme.spacing(2) }
}));



function BottomBar() {
    const classes = useStyles();
    return (
        <>
            <AppBar
                className={classes.AppBar}
                position="fixed" color="inherit">
                <Toolbar>
                    <Button className={classes.btn} color="inherit"> Salvar </Button>
                    <Button color="secondary" variant="outlined"> Publicar </Button>
                </Toolbar>
            </AppBar>

        </>)



};

export default BottomBar;