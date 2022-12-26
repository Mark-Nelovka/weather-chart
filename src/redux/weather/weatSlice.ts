import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCity, updateTimeAllCity, updateCity, deleteCity } from "./weatOperations";
import { IItemsWeather, IStateWeather } from '../../interfaces/State';


export const initialState: IStateWeather = {
  weather: [],
  pending: false,
  rejected: false
};

const authSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {


    builder.addCase(getCity.pending, (state: IStateWeather, _) => {
      state.pending = true;
    });
     builder.addCase(getCity.fulfilled, (state: IStateWeather, action: PayloadAction<IItemsWeather>) => {
      const repeteCity = state.weather.find(city => city.id === action.payload.id);
       if (repeteCity) {
         state.pending = false;
        return;
      }
       state.weather = [...state.weather, action.payload];
       state.pending = false;
       state.rejected = false;
     });
    builder.addCase(getCity.rejected, (state: IStateWeather, _) => {
      state.pending = false;
      state.rejected = true;
    });


    builder.addCase(updateTimeAllCity.pending, (state: IStateWeather, _) => {
      state.pending = true;
    });
    builder.addCase(updateTimeAllCity.fulfilled, (state: IStateWeather, action: PayloadAction<IItemsWeather[]>) => {
      action.payload.forEach((city) => {
        const findIndexUpdateCity = state.weather.findIndex(el => el.id === city.id);
        if (findIndexUpdateCity > -1) {
          state.weather.splice(findIndexUpdateCity, 1, city)
          state.pending = false;
          state.rejected = false;
          return;
        }
        state.pending = false;
        state.rejected = true;
      })
    });
    builder.addCase(updateTimeAllCity.rejected, (state: IStateWeather, _) => {
      state.pending = false;
      state.rejected = true;
    });


    builder.addCase(updateCity.pending, (state: IStateWeather, _) => {
      state.pending = true;
    });
    builder.addCase(updateCity.fulfilled, (state: IStateWeather, action: PayloadAction<IItemsWeather>) => {
      const findCityUpdate = state.weather.findIndex(el => el.id === action.payload.id);
      if (findCityUpdate > -1) {
        state.weather.splice(findCityUpdate, 1, action.payload)
        state.pending = false;
        state.rejected = false;
        return;
      }
      state.pending = false;
      state.rejected = true;
    });
    builder.addCase(updateCity.rejected, (state: IStateWeather, _) => {
      state.pending = false;
      state.rejected = true;
    });

    
    builder.addCase(deleteCity.pending, (state: IStateWeather, _) => {
      state.pending = true;
    });
    builder.addCase(deleteCity.fulfilled, (state: IStateWeather, action: PayloadAction<string>) => {
      const filteredCity = state.weather.filter(el => el.id !== +action.payload);
      state.weather = filteredCity;
      state.pending = false;
      state.rejected = false;
    });
    builder.addCase(deleteCity.rejected, (state: IStateWeather, _) => {
      state.pending = false;
      state.rejected = true;
    });
    
    
  },
  
});

export default authSlice.reducer;