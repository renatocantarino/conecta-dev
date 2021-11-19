import React, { useCallback, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Box } from '@material-ui/core';

import NavBar from './NavBar';
import axios from "../../Utils/axios";
import PostCard from '../../components/PostCard';

const UseStyles = makeStyles((themes) => ({
    root: {
        padding: themes.spacing(2),
        marginRight: themes.spacing(2)
    },
    btn: { width: '100%' }
}));


function Feed() {
    const classes = UseStyles();
    const [posts, setPosts] = React.useState([]);

    const getPosts = useCallback(async () => {
        const feed = await axios.get('/api/feed');
        setPosts(feed.data.posts);
    }, [setPosts]);

    useEffect(() => {
        getPosts();
    }, [getPosts]);



    return (
        <Container maxWidth="lg">
            <Box display="flex">
                <NavBar />
                <div className={classes.root}>
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </Box>
        </Container>
    );
}

export default Feed;