import axios from "../../Utils/axios";

class SignInService {
    signIn = (email, password) => {
        return new Promise((resolve, reject) => {
            axios.post('/api/user/login', { email, password })
                .then(response => {
                    debugger;
                    if (response.data) {
                        //this.setuser(response.data.user);
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

    setuser = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
    };

    getuser = () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    };

    isAuthenticated = () => !!this.getuser();

}


export default new SignInService();



