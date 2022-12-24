import axios from "axios";
import { IGeolocProps } from "../../interfaces/API";

const {REACT_APP_API_KEY} = process.env;

export default async function getHistoryWeatherForCity({ latitude, longitude}: IGeolocProps) {
    try {
        const res = axios.get(`https://history.openweathermap.org/data/2.5/history/city?lat=${latitude}&lon=${longitude}&type=hour&start={start}&end={end}&appid=${REACT_APP_API_KEY}`);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

// -------------------- API ANSWER EXAMPLES -----------------------

// {
//    "message": "Count: 24",
//    "cod": "200",
//    "city_id": 4298960,
//    "calctime": 0.00297316,
//    "cnt": 24,
//    "list": [
//    {
//    "dt": 1578384000,
//    "main": {
//      "temp": 275.45,
//      "feels_like": 271.7,
//      "pressure": 1014,
//      "humidity": 74,
//      "temp_min": 274.26,
//      "temp_max": 276.48
//    },
//    "wind": {
//      "speed": 2.16,
//      "deg": 87
//    },
//    "clouds": {
//      "all": 90
//    },
//    "weather": [
//      {
//        "id": 501,
//        "main": "Rain",
//        "description": "moderate rain",
//        "icon": "10n"
//      }
//    ],
//    "rain": {
//      "1h": 0.9
//    }
// },
// ....