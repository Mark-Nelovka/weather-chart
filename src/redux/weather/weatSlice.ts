import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCity, updateTimeAllCity, updateCity, deleteCity } from "./weatOperations";
import { IItemsWeather, IStateWeather } from '../../interfaces/State';
import Notiflix from "notiflix";

export const initialState: IStateWeather = {
  weather: [],
  pending: false,
};

const authSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {


    builder.addCase(getCity.pending, (state: IStateWeather, _) => {
      state.pending = true;
    });
     builder.addCase(getCity.fulfilled, (state: IStateWeather, {payload}: PayloadAction<IItemsWeather>) => {
      const repeteCity = state.weather.find(city => city.id === payload.id);
       if (repeteCity) {
         state.pending = false;
         Notiflix.Notify.warning(`Sorry, but city with name ${repeteCity.name} is already`);
        return;
       }
       state.pending = false;
       state.weather = [...state.weather, payload];
     });
    builder.addCase(getCity.rejected, (state: IStateWeather, _) => {
      state.pending = false;
      return state;
    });


    builder.addCase(updateTimeAllCity.pending, (state: IStateWeather, _) => {
      state.pending = true;
    });
    builder.addCase(updateTimeAllCity.fulfilled, (state: IStateWeather, {payload}: PayloadAction<IItemsWeather[]>) => {
      payload.forEach((city) => {
        const findIndexUpdateCity = state.weather.findIndex(el => el.id === city.id);
          state.weather.splice(findIndexUpdateCity, 1, city)
          state.pending = false;
      })
    });
    builder.addCase(updateTimeAllCity.rejected, (state: IStateWeather, _) => {
      state.pending = false;
       return state;
    });


    builder.addCase(updateCity.pending, (state: IStateWeather, _) => {
      state.pending = true;
    });
    builder.addCase(updateCity.fulfilled, (state: IStateWeather, {payload}: PayloadAction<IItemsWeather>) => {
      const findCityUpdate = state.weather.findIndex(el => el.id === payload.id);
      
      state.weather.splice(findCityUpdate, 1, payload)
        state.pending = false;
    });
    builder.addCase(updateCity.rejected, (state: IStateWeather, _) => {
      state.pending = false;
      return state;
    });

    
    builder.addCase(deleteCity.pending, (state: IStateWeather, _) => {
      state.pending = true;
    });
    builder.addCase(deleteCity.fulfilled, (state: IStateWeather, action: PayloadAction<string>) => {
      const filteredCity = state.weather.filter(el => el.id !== +action.payload);
      state.weather = filteredCity;
      state.pending = false;
    });
    builder.addCase(deleteCity.rejected, (state: IStateWeather, _) => {
      state.pending = false;
      return state;
    });
    
    
  },
  
});

export default authSlice.reducer;