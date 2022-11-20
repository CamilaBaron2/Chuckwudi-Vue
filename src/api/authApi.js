import axios from "axios";

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyClb1q7blYUjj9d8uqX7Cq0H9s8DUDryIg'
    }
})

export default authApi