import React, { useCallback, useState } from 'react';
import Header from '../../components/Header';
import {
    makeStyles,
    Box,
    AppBar,
    Toolbar,
    Button,
    TextField,
    Divider,
    Typography
} from '@material-ui/core';
import { useDropzone } from 'react-dropzone'
import { Autocomplete } from '@material-ui/lab';

import Markdown from 'react-markdown';

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
        height: '100%',
        width: '100%',
        resize: 'none',
        border: 'none',
        outline: 'none',
        fontSize: 15
    }

}));


const tagCloud = [
    { title: 'React' },
    { title: 'node' },
    { title: 'Java' },
]




function NewPost() {
    const classes = useStyles();
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([]);
    const [markdownText, setMarkdownText] = useState('');



    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const base64 = reader.result;
            setImage(file);
        };
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: false,
        accept: "image/*"
    });


    const HandleChange = (event) => setTitle(event.currentTarget.value);
    const HandleChangeMarkdown = (event) => setMarkdownText(event.currentTarget.value);
    const HandleChangeTags = (event, value) => setTags(value);

    return (
        <>
            <Header />
            <Box mt={13} display="flex" height="calc(100% - 70px)" >
                <Box width="50%" padding={2} borderRight="1px solid #DDD">
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <Button>Carregar Imagem</Button>
                    </div>
                    {image && <img className={classes.image} src={URL.createObjectURL(image)} alt="Preview" />}
                    <TextField
                        id='title'
                        fullWidth
                        value={title}
                        onChange={HandleChange}
                        placeholder="Titulo" />

                    <Autocomplete
                        multiple
                        limitTags={2}
                        id="multiple-limit-tags"
                        options={tagCloud}
                        onChange={HandleChangeTags}
                        getOptionLabel={(option) => option.title}
                        defaultValue={[tagCloud[0]]}
                        renderInput={(params) => (
                            <TextField {...params} placeholder="tags" />
                        )} />


                    <textarea
                        onChange={HandleChangeMarkdown}
                        className={classes.editor}></textarea>
                </Box>
                <Box width="50%" height="100%" padding={2}>
                    {image && <img
                        className={classes.imagePreview}
                        src={URL.createObjectURL(image)} alt="Preview" />}



                    <Typography variant='h4' >
                        {title}
                    </Typography>
                    <Box>
                        <Typography variant='body1'>
                            autor: renatocantarino
                        </Typography>
                    </Box>
                    <Typography variant='body1' >
                        <b> tags: </b>  {tags.map(tag => tag.title).join(', ')}
                    </Typography>
                    <Divider />
                    <Markdown children={markdownText} />


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