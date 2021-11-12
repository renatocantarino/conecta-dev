import React, { useState } from 'react';
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
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([]);
    const [markdownText, setMarkdownText] = useState('');

    const HandleChangeTitle = (event) => setTitle(event.currentTarget.value);
    const HandleChangeMarkdown = (event) => setMarkdownText(event.currentTarget.value);
    const HandleChangeTags = (event, value) => setTags(value);

    return (
        <>
            <Header />
            <Box mt={11} display="flex" height="calc(100% - 70px)" >
                <Box width="50%" padding={2} borderRight="1px solid #DDD">
                    <PostEditor
                        image={image}
                        setImage={setImage}
                        title={title}
                        setTitle={HandleChangeTitle}
                        tags={tags}
                        setTags={HandleChangeTags}
                        markdownText={markdownText}
                        setMarkdownText={HandleChangeMarkdown}
                    />

                </Box>
                <Box width="50%" height="100%" padding={2}>
                    <PostPreview
                        image={image}
                        title={title}
                        tags={tags}
                        markdownText={markdownText}
                    />
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
        </>
    );
}

export default NewPost;