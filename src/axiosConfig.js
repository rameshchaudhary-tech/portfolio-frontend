import axios from 'axios';

// Yeh aapka central point hai, future mein URL badalna ho toh sirf yahan badalna padega
const API = axios.create({
    baseURL: 'https://portfolio-backend-paud.onrender.com/api',
});

export default API;