import axios from "../../Utils/axios";

class SignInService {
    signIn(email, password) {
        return new Promise((resolve, reject) => {
            axios.post('/api/user/login', { email, password })
                .then(response => {
                    response.data.success
                        ? resolve(response.data.user)
                        : reject(response.data.message);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}


export default new SignInService();



