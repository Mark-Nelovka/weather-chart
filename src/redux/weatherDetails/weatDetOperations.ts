import axios from 'axios';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentWeather, getHistoryWeatherForCity } from '../../components/API';
import getCurrentDate from '../../Heplers/getCurrentDate';

axios.defaults.baseURL = '';

interface IPropsGetCity {
    cityForSearch: string
}

const getCityWithDetails = createAsyncThunk('weatherDet/getCity', async (item: IPropsGetCity, thunkApi) => {
    let data = await getCurrentWeather(item);
    const history = await getHistoryWeatherForCity(item);
    const currentDate = getCurrentDate(data.sys.country);
    data = {
        ...data,
        currentDate,
        dtCreated: new Date().getTime(),
        history
    }
    return data;
});

const cleanStore = createAction("weatherDet/clean")

export { getCityWithDetails, cleanStore };
