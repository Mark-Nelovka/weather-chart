import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import { getHistoryWeatherForCity } from '../../components/API';
import getCurrentDate from '../../Heplers/getCurrentDate';
import { IPropsGetCity } from "../../interfaces/Operations";
import Notiflix from "notiflix"

const { REACT_APP_API_KEY, REACT_APP_URL_API } = process.env;

axios.defaults.baseURL = `${REACT_APP_URL_API}`;

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
        Notiflix.Notify.failure("Ooops, something is wrong. Please, try again later")
        return thunkApi.rejectWithValue(error);
    }
});

const cleanStore = createAction("weatherDet/clean")

export { getCityWithDetails, cleanStore };
