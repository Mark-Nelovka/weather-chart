import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import { getHistoryWeatherForCity } from '../../components/API';
import getCurrentDate from '../../Heplers/getCurrentDate';
import { IPropsGetCity } from "../../interfaces/Operations";

axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5/weather";

const { REACT_APP_API_KEY } = process.env;

const getCityWithDetails = createAsyncThunk('weatherDet/getCity', async ({cityForSearch}: IPropsGetCity, thunkApi) => {
    try {
        const { data } = await axios.get(`?q=${cityForSearch}&appid=${REACT_APP_API_KEY}&units=metric`);

        const history = await getHistoryWeatherForCity({ cityForSearch })
        
        const currentDate = getCurrentDate(data.sys.country);

        let changedData = {
            ...data,
            currentDate,
            dtCreated: new Date().getTime(),
            history
        }
            
        return changedData;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

const cleanStore = createAction("weatherDet/clean")

export { getCityWithDetails, cleanStore };
