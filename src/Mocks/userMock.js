import mock from '../Utils/mock';

mock.onPost('/api/user/login').reply((config) => {
    
    const { email, password } = JSON.parse(config.data);
        if (password !== 'admin') {
        return [400, { message: 'dados incorretos' }];
    }

    const user = {
        id: 1,
        username: "Renato",
        email: email
    };

    return [200, { user }];
});

