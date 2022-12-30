
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:1337/api/',
    timeout: 1000,
});

export default api