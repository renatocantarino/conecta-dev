import React, { createContext, useState, useContext } from 'react';

export const PostContext = createContext();

export function PostProvider({ children }) {

    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([]);
    const [markdownText, setMarkdownText] = useState('');

    const HandleChangeTitle = (event) => setTitle(event.currentTarget.value);
    const HandleChangeMarkdown = (event) => setMarkdownText(event.currentTarget.value);
    const HandleChangeTags = (event, value) => setTags(value);


    return (
        <PostContext.Provider value={{
            image, setImage,
            title,
            setTitle: HandleChangeTitle,
            tags,
            setTags: HandleChangeTags,
            markdownText,
            setMarkdownText: HandleChangeMarkdown
        }}>
            {children}
        </PostContext.Provider >
    );
}


export function usePostContext() {
    const ctx = useContext(PostContext);
    const {
        image, setImage,
        title, setTitle,
        tags, setTags,
        markdownText, setMarkdownText
    } = ctx;

    return {
        image, setImage,
        title, setTitle,
        tags, setTags,
        markdownText, setMarkdownText
    }
}


