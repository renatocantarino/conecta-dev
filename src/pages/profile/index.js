import React, { useEffect, useCallback, useState } from 'react';
import Header from '../../components/Header';
import PersonInfo from '../../components/Profile';

import axios from '../../Utils/axios';

function Me() {
    const [person, setPerson] = useState([]);
    const getPerson = useCallback(async () => {
        const postFetch = await axios.get('/api/user/profile');
        console.log(postFetch);
        setPerson(postFetch.data?.user);
    }, [setPerson]);

    useEffect(() => {
        getPerson();
    }, [getPerson]);

    return (
        <>
            <Header />
            <PersonInfo person={person} />
        </>
    )
}

export default Me;