import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentWeather } from '../../components/API';
import getCurrentDate from '../../General/getCurrentDate';

axios.defaults.baseURL = '';

interface IProps {
    cityForSearch: string
}

const getCity = createAsyncThunk('weather/getCity', async (item: IProps, thunkApi) => {
    let data = await getCurrentWeather(item);
    const currentDate = getCurrentDate(data.sys.country);
    data = {
        ...data,
        currentDate
    }
    console.log(data)
    return data;
});

export {getCity};