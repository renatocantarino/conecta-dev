import mock from '../Utils/mock';


mock.onPost('/api/user/me').reply(200, {
    user: {
        id: 1,
        name: 'Renato Cantarino',
        username: 'Renatocantarino',
        email: 'eu@renatocantarino.com.br'
    },
});


mock.onGet('/api/user/profile').reply(200, {
    user: {
        id: 1,
        name: 'Renato Cantarino',
        username: 'Renatocantarino',
        email: 'eu@renatocantarino.com.br'
    },
});

mock.onPost('/api/user/login').reply((config) => {
    const { email, password } = JSON.parse(config.data);
    if (password !== 'admin') {
        return [400, { message: 'dados incorretos' }];
    }

    const user = {
        id: 1,
        name: 'Renato Cantarino',
        username: 'Renatocantarino',
        email: email,
    };

    return [200, { user }];
});



