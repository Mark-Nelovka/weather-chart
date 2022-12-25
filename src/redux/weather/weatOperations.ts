import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentWeather } from '../../components/API';
import getCurrentDate from '../../Heplers/getCurrentDate';
import { IItems } from './weatSlice';

axios.defaults.baseURL = '';

interface IPropsGetCity {
    cityForSearch: string
}

interface IPropsUpdateAll {
        itemAll: IItems[],
        dt: number[]
}

const getCity = createAsyncThunk('weather/getCity', async (item: IPropsGetCity, thunkApi) => {
    let data = await getCurrentWeather(item);
    const currentDate = getCurrentDate(data.sys.country);
    data = {
        ...data,
        currentDate,
        dtCreated: new Date().getTime()
    }
    return data;
});

const updateTimeAllCity = createAsyncThunk("weathet/updateAll", async ({ itemAll, dt }: IPropsUpdateAll, thunkApi) => {
    let cityForUpdate: IItems[] = [];
    for (let el of dt) {
        const findElemForUpdate = itemAll.find((_, indx) => indx === el);
        if (findElemForUpdate) {
            
        let data = await getCurrentWeather({cityForSearch: findElemForUpdate.name});
        const currentDate = getCurrentDate(data.sys.country);
            
    data = {
        ...data,
        currentDate,
        dtCreated: new Date().getTime()
        }
        cityForUpdate.push(data);
        }
    }

    return cityForUpdate;
});

const updateCity = createAsyncThunk("weather/update", async (id: string, thunkApi) => {
     let data = await getCurrentWeather({cityForSearch: id});
        const currentDate = getCurrentDate(data.sys.country);
            
    data = {
        ...data,
        currentDate,
        dtCreated: new Date().getTime()
        }
    return data;

})

const deleteCity = createAsyncThunk("weather/delete", async (id: string, thunkApi) => {
    return id;
})

export { getCity, updateTimeAllCity, updateCity, deleteCity};
