import React, { useState, useCallback, useEffect } from 'react';



import PostViewer from '../../components/PostViewer';
import Header from '../../components/Header';


import axios from '../../Utils/axios'


function RootPost() {
    const [post, setPost] = useState([]);
    const getPosts = useCallback(async () => {
        const postFetch = await axios.get('api/post/como-melhorar-seu-codigo-javascript');
        setPost(postFetch.data);
    }, [setPost]);

    useEffect(() => {
        getPosts();
    }, [getPosts]);





    return (
        <>
            <Header />
            <PostViewer post={post} />
        </>
    )
}

export default RootPost;


