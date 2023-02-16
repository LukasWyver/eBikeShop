import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.103:3000'
})

export default api;

// npx json-server --watch db.json --host 192.168.1.103