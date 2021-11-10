import mock from '../Utils/mock';

mock.onPost('/api/user/login').reply((config) => {

    const { username, password } = JSON.parse(config.data);

    if (password !== 'admin') {
        return [400, { message: 'dados incorretos' }];
    }

    const user = {
        id: 1,
        username: 'cantarino',
        email: 'admin@admin.com'
    };

    return [200, { user }];
});

