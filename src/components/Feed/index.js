import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PostCard from '../PostCard';
import { Container, Box } from '@material-ui/core';


const UseStyles = makeStyles((themes) => ({
    root: {
        padding: themes.spacing(2),
        marginRight: themes.spacing(2)
    },
    btn: {
        width: '100%'
    }
}));

const posts = [
    {
        id: 1,
        autor:
        {
            nome: "Renato"

        },
        title: 'Post 1',
        name: 'ReactJS'
    },
    {
        id: 2,
        autor:
        {
            nome: "Jose"

        },
        title: 'Post 2',
        name: 'Node'
    },
    {
        id: 3,
        autor:
        {
            nome: "Alexandre"

        },
        title: 'Post 3',
        name: 'Next'
    },
    {
        id: 4,
        autor:
        {
            nome: "Vitor"

        },
        title: 'Post 4',
        name: 'Vue'
    },
    {
        id: 5,
        autor:
        {
            nome: "Yasmin"

        },
        title: 'Post 5',
        name: 'Java'
    },
    {
        id: 6,
        autor:
        {
            nome: "Maritaca"

        },
        title: 'Post 6',
        name: 'Rust'
    }
]


function Feed() {
    const classes = UseStyles();
    return (
        <Container maxWidth="lg">
            <Box display="flex">
                <div className={classes.root}>
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </Box>
        </Container>

    )
}

export default Feed;
