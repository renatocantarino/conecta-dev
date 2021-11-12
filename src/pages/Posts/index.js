import React from 'react';
import Header from '../../components/Header';
import Box from '@material-ui/core/Box';


function NewPost() {
    return (
        <>
            <Header />
            <Box mt={13} display="flex" height="calc(100% - 70px)" overflow="scroll">
                <Box width="50%" height="100%" padding={2} borderRight="1px solid #DDD">
                    sasasa
                </Box>
                <Box width="50%" height="100%" padding={2}>
                    xsxsxsx
                </Box>
            </Box>

        </>
    );
}

export default NewPost;