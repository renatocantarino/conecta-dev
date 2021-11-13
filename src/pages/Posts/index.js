import React from 'react';
import Header from '../../components/Header';
import {
    makeStyles,
    Box,
    AppBar,
    Toolbar,
    Button
} from '@material-ui/core';

import PostEditor from './editor';
import PostPreview from './preview';
import { PostProvider } from '../../context/PostContext';

const useStyles = makeStyles(theme => ({
    root: {},
    AppBar: {
        top: 'auto',
        bottom: 0,
        alignItems: 'center'
    },
    btn: { margin: theme.spacing(2) }
}));

function NewPost() {
    const classes = useStyles();

    return (
        <>
            <PostProvider>
                <Header />
                <Box mt={11} display="flex" height="calc(100% - 70px)" >
                    <Box width="50%" padding={2} borderRight="1px solid #DDD">
                        <PostEditor />

                    </Box>
                    <Box width="50%" height="100%" padding={2}>
                        <PostPreview />
                    </Box>

                </Box>
                <AppBar
                    className={classes.AppBar}
                    position="fixed" color="inherit">
                    <Toolbar>
                        <Button className={classes.btn} color="inherit"> Salvar </Button>
                        <Button color="secondary" variant="outlined"> Publicar </Button>
                    </Toolbar>
                </AppBar>
            </PostProvider>
        </>
    );
}

export default NewPost;