import {FETCH_WEATHER} from './types'
import axios from 'axios'
const API_KEY ='80f6beefadb22586e031a05ab96c3c7e';
const proxy = 'https://cors-anywhere.herokuapp.com/';
const ROOT_URL = `${proxy}https:api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const fetchWeather = (city) => {
    const url = `${ROOT_URL}&q=${city}`;
    const requset = axios.get(url)
    return {
        type: FETCH_WEATHER,
        payload: requset
    }
}