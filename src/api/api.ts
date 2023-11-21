import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
    // withCredentials: true,
    // headers: {'API-KEY': 'faffa70c89f89ad08683cf373e1243ce'}
})