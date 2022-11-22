import axios from 'axios';
import storage from '../storage/Storage';

const axiosClient = axios.create({
    baseURL: `http://localhost:4000/`,
    timeout: 5000, // default is `0` (no timeout)
    responseType: 'json'
});

axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    const token = storage.getToken('token');
    if (token !== null && token !== undefined) {
        config.headers.Authorization = token;
    }
    return config;
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data !== undefined) {
        // only get data
        return response.data;
    }

    return response;
}, (error) => {
    // Handle errors
    if (error.response) {
        throw error.response
    } else if (error.request) {
        throw error.request
    } else {
        throw error;
    }
});

export default axiosClient;

