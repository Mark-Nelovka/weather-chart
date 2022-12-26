import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStateWeatherDetails, IItemsWeatherDetails } from '../../interfaces/State';
import { getCityWithDetails, cleanStore } from "./weatDetOperations";



export const initialState: IStateWeatherDetails = {
  weatherDetails: [],
  pending: false,
  rejected: false
};

const authSlice = createSlice({
  name: 'weatherDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    
    builder.addCase(getCityWithDetails.pending, (state: IStateWeatherDetails, _) => {
      state.pending = true;
      });
    builder.addCase(getCityWithDetails.fulfilled, (state: IStateWeatherDetails, action: PayloadAction<IItemsWeatherDetails>) => {
      state.weatherDetails = [action.payload];
      state.pending = false;
      state.rejected = false;
    });
    builder.addCase(getCityWithDetails.rejected, (state: IStateWeatherDetails, _) => {
      state.pending = false;
      state.rejected = true;
    });
    
    
    builder.addCase(cleanStore, (state: IStateWeatherDetails, action: PayloadAction) => {
      state.weatherDetails = [];
    });
  },
  
});

export default authSlice.reducer;