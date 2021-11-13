import React, { useCallback } from 'react';
import {
    makeStyles,
    Box,
    Button,
    TextField
} from '@material-ui/core';
import { useDropzone } from 'react-dropzone'
import { Autocomplete } from '@material-ui/lab';
import Title from '../title'
import { usePostContext } from '../../../context/PostContext';

const useStyles = makeStyles(theme => ({
    root: {},
    AppBar: {
        top: 'auto',
        bottom: 0,
        alignItems: 'center',
    },
    btn: {
        margin: theme.spacing(2)
    },
    image: {
        height: 100,
    },
    imagePreview: {
        width: '100%',
    },
    editor: {
        height: 513,
        width: 488,
        resize: 'none',
        border: 'none',
        outline: 'none',
        fontSize: 15
    }

}));


const arrayTags = [
    { title: 'react.js' },
    { title: 'node.js' },
    { title: 'dotnetcore' },
    { title: 'webdev' },
];

function PostEditor() {
    const classes = useStyles();
    const ctx = usePostContext();
    const {
        image,
        setImage,
        tags,
        setTags,
        markdownText,
        setMarkdownText } = ctx;

    const onDrop = useCallback(
        (acceptedFiles) => {
            const file = acceptedFiles[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                const base64data = reader.result;
                setImage(base64data);
            };
        },
        [setImage],
    );

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: false,
        accept: 'image/*',
    });

    return (
        <>
            <Box {...getRootProps()} mb={1}>
                <input {...getInputProps()} />
                <Button variant='outlined'>Carregar imagem</Button>
            </Box>

            {image && (
                <Box mb={2}>
                    <img className={classes.image} src={image} alt="background" />
                </Box>
            )}
            <Box mb={2}>
                <Title />
            </Box>
            <Box mb={2}>
                <Autocomplete
                    multiple
                    id="tags-standard"
                    options={arrayTags}
                    getOptionLabel={(option) => option.title}
                    value={tags}
                    onChange={setTags}
                    renderInput={(params) => (
                        <TextField {...params} variant="standard" placeholder="tags" />
                    )}
                />
            </Box>
            <textarea
                onChange={setMarkdownText}
                value={markdownText}
                className={classes.editor}
            >

            </textarea>
        </>
    );
}

export default PostEditor;