import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
import getCurrentDate from '../../Heplers/getCurrentDate';
import { IItemsWeather } from '../../interfaces/State';
import { IPropsGetCity, IPropsUpdateAll } from "../../interfaces/Operations";
import Notiflix from "notiflix";

const { REACT_APP_API_KEY, REACT_APP_URL_API } = process.env;

axios.defaults.baseURL = `${REACT_APP_URL_API}`;



const getCity = createAsyncThunk('weather/getCity', async ({cityForSearch}: IPropsGetCity, thunkApi) => {
        try {
            const { data } = await axios.get(`?q=${cityForSearch}&appid=${REACT_APP_API_KEY}&units=metric`);
            
            const currentDate = getCurrentDate(data.sys.country);

            let changedData = {
            ...data,
            currentDate,
            dtCreated: new Date().getTime()
            }
            return changedData;
        } catch (error) {
        Notiflix.Notify.failure(`Sorry, city with name ${cityForSearch} not found`);
        return thunkApi.rejectWithValue(error);
    }
});

const updateTimeAllCity = createAsyncThunk("weather/updateAll", async ({ itemAll, dt }: IPropsUpdateAll, thunkApi) => {
    let cityForUpdate: IItemsWeather[] = [];
    for (let el of dt) {
        const findElemForUpdate = itemAll.find((_, indx) => indx === el);
        if (findElemForUpdate) {
            try {
                const {data} = await axios.get(`?q=${findElemForUpdate.name}&appid=${REACT_APP_API_KEY}&units=metric`);
                const currentDate = getCurrentDate(data.sys.country);
                let changedData = {
            ...data,
            currentDate,
            dtCreated: new Date().getTime()
                }
            cityForUpdate.push(changedData);
            } catch (error) {
            Notiflix.Notify.failure("Ooops, something is wrong. Please, try again later");
               return thunkApi.rejectWithValue(error);
            }
        }
    }

    return cityForUpdate;

});

const updateCity = createAsyncThunk("weather/update", async (id: string, thunkApi) => {
    try {
        const { data } = await axios.get(`?q=${id}&appid=${REACT_APP_API_KEY}&units=metric`);

        const currentDate = getCurrentDate(data.sys.country);

        let changedData = {
            ...data,
            currentDate,
            dtCreated: new Date().getTime()
            }

            return changedData;
    } catch (error) {
       Notiflix.Notify.failure("Ooops, something is wrong. Please, try again later");
       return thunkApi.rejectWithValue(error);
   }
})

const deleteCity = createAsyncThunk("weather/delete", (id: string, _) => {
    return id;
})

export { getCity, updateTimeAllCity, updateCity, deleteCity};
