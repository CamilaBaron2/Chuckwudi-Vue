import axios from "axios";

const chukwudiApi = axios.create({
    baseURL: 'https://vue-chukwudi-default-rtdb.firebaseio.com',
})

export default chukwudiApi