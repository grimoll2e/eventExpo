import axios from 'axios';
axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_ENDPOINT_URL;
// import.meta.env.VITE_REACT_APP_ENDPOINT_URL  สำหรับ vite
// process.env.REACT_APP_ENDPOINT_URL           สำหรับ react

export default axios;