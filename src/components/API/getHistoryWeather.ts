import axios from "axios";
import { IWeatherProps } from "../../interfaces/API";

const { REACT_APP_API_KEY } = process.env;

export default async function getHistoryWeatherForCity({ cityForSearch }: IWeatherProps) {
    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityForSearch}&appid=${REACT_APP_API_KEY}&units=metric`);
        return res.data.list;
    } catch (error) {
        return error
    }
}