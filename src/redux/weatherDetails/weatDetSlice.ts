import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStateWeatherDetails, IItemsWeatherDetails } from '../../interfaces/State';
import { getCityWithDetails, cleanStore } from "./weatDetOperations";



export const initialState: IStateWeatherDetails = {
  weatherDetails: [],
  pending: false,
};

const authSlice = createSlice({
  name: 'weatherDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    
    builder.addCase(getCityWithDetails.pending, (state: IStateWeatherDetails, _) => {
      state.pending = true;
      });
    builder.addCase(getCityWithDetails.fulfilled, (state: IStateWeatherDetails, {payload}: PayloadAction<IItemsWeatherDetails>) => {
      state.weatherDetails = [payload];
      state.pending = false;
    });
    builder.addCase(getCityWithDetails.rejected, (state: IStateWeatherDetails, _) => {
      state.pending = false;
      return state;
    });
    
    
    builder.addCase(cleanStore, (state: IStateWeatherDetails, _) => {
      state.weatherDetails = [];
    });
  },
  
});

export default authSlice.reducer;