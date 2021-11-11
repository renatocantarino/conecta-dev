import axios from "../../Utils/axios";

class SignInService {
    signIn = (email, password) => {
        return new Promise((resolve, reject) => {
            axios.post('/api/user/login', { email, password })
                .then(response => {
                    if (response.data) {
                        this.setToken('JWT');
                        resolve(response.data.user);
                    }
                    else {
                        reject(response.data.message);
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    signInWithToken = () => {
        return new Promise((resolve, reject) => {
            axios.post('/api/user/me')
                .then(response => {
                    if (response.data) {
                        resolve(response.data.user);
                    }
                    else {
                        reject(response.data.message);
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    signOut = () => localStorage.removeItem('acessToken');
    setToken = (token) => localStorage.setItem('acessToken', token);
    getToken = () => localStorage.getItem('acessToken');
    isAuthenticated = () => !!this.getToken();

}


export default new SignInService();



