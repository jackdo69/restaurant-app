import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://restaurant-app-8781d.firebaseio.com/'
});

export default instance;
