import axios from 'axios';

let authApiInstance = axios.create({
    baseURL:"http://localhost:3000/api/auth",
    //  withCredentials: true 
})

let loginUser = (data) => authApiInstance.post('/login', data);
let registerUser = (data) => authApiInstance.post('/register', data);
export {
    registerUser,
    loginUser
}
