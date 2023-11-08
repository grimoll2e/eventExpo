import axios from 'axios';
import { getAccessToken } from '../util/local-storage'

axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_ENDPOINT_URL;

// import.meta.env.VITE_REACT_APP_ENDPOINT_URL  สำหรับ vite
// process.env.REACT_APP_ENDPOINT_URL           สำหรับ react

axios.interceptors.request.use(
    config => {
        if (getAccessToken()) {
            config.headers.Authorization = `Bearer ${getAccessToken()}`
        }
        return config
    },
    err => {
        return Promise.reject(err)
    })

export default axios;