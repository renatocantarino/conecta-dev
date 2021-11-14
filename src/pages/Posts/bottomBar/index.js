import React from 'react';
import {
    makeStyles,
    AppBar,
    Toolbar,
    Button
} from '@material-ui/core';
import { usePostContext } from '../../../context/PostContext';


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
    const ctx = usePostContext()
    const { image, title, tags, markdownText } = ctx;

    const HandleSaveAsDraft = () => {
        alert(title);

    };

    const HandleSavePost = () => {
        alert('Save as Post');
    };
    return (
        <>
            <AppBar
                className={classes.AppBar}
                position="fixed" color="inherit">
                <Toolbar>
                    <Button
                        className={classes.btn}
                        color="inherit"
                        onClick={HandleSaveAsDraft}
                        variant="outlined"> Salvar como Rascunho </Button>

                    <Button
                        color="secondary"
                        variant="outlined"
                        onClick={HandleSavePost}> Publicar </Button>
                </Toolbar>
            </AppBar>

        </>)



};

export default BottomBar;