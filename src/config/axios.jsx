import axios from 'axios';

const baseAxios = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_API}`
});

export default baseAxios;