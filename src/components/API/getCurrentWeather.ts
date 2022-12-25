import axios from "axios";
import { IWeatherProps } from "../../interfaces/API";

const {REACT_APP_API_KEY} = process.env;

export default async function getCurrentWeather({ cityForSearch }: IWeatherProps) {
    try {
        const weatherInCity = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityForSearch}&appid=${REACT_APP_API_KEY}&units=metric`);
        return weatherInCity.data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

// base
// : 
// "stations"
// clouds
// : 
// {all: 20}
// cod
// : 
// 200
// coord
// : 
// {lon: -0.1278, lat: 51.5074}
// dt
// : 
// 1671899949
// id
// : 
// 2643743
// main
// : 
// feels_like
// : 
// 281.37
// humidity
// : 
// 91
// pressure
// : 
// 1009
// temp
// : 
// 282.95
// temp_max
// : 
// 284
// temp_min
// : 
// 281.66
// [[Prototype]]
// : 
// Object
// name
// : 
// "London"
// sys
// : 
// country
// : 
// "GB"
// id
// : 
// 2075535
// sunrise
// : 
// 1671869105
// sunset
// : 
// 1671897288
// type
// : 
// 2
// [[Prototype]]
// : 
// Object
// timezone
// : 
// 0
// visibility
// : 
// 10000
// weather
// : 
// [{…}]
// wind
// : 
// deg
// : 
// 190
// speed
// : 
// 3.09

// -------------------- API ANSWER EXAMPLES -----------------------

// {
//   "coord": {
//     "lon": 10.99,
//     "lat": 44.34
//   },
//   "weather": [
//     {
//       "id": 501,
//       "main": "Rain",
//       "description": "moderate rain",
//       "icon": "10d"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 298.48,
//     "feels_like": 298.74,
//     "temp_min": 297.56,
//     "temp_max": 300.05,
//     "pressure": 1015,
//     "humidity": 64,
//     "sea_level": 1015,
//     "grnd_level": 933
//   },
//   "visibility": 10000,
//   "wind": {
//     "speed": 0.62,
//     "deg": 349,
//     "gust": 1.18
//   },
//   "rain": {
//     "1h": 3.16
//   },
//   "clouds": {
//     "all": 100
//   },
//   "dt": 1661870592,
//   "sys": {
//     "type": 2,
//     "id": 2075663,
//     "country": "IT",
//     "sunrise": 1661834187,
//     "sunset": 1661882248
//   },
//   "timezone": 7200,
//   "id": 3163858,
//   "name": "Zocca",
//   "cod": 200
// }       