import Api from '../api/index';

const register = (name, email, password, confirm_password) => {
    return Api.post('/register', {
        name,
        email,
        password,
        confirm_password
    });
};

const login = (email, password) => {
    return Api.post('/login', {
        email,
        password
    });
};

export default {
    register,
    login
};
