import React from 'react';
import TextField from '@material-ui/core/TextField';
import { usePostContext } from '../../../context/PostContext';



function Title() {
    const ctx = usePostContext();
    const { title, setTitle } = ctx;
    return (
        <TextField
            id="title"
            placeholder="Título"
            fullWidth
            value={title}
            onChange={setTitle}
        />
    );
}

export default Title;