import axios from "axios";

const chukwudiApi = axios.create({
    baseURL: 'https://vue-chukwudi-default-rtdb.firebaseio.com',
})

chukwudiApi.interceptors.request.use( (config) => {

    config.params = {
        auth: localStorage.getItem('idToken')
    }

    return config
})

export default chukwudiApi