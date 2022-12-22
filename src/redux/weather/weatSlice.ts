import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IState {
  weather: String
}

const initialState: IState = {
    weather: ''
};

const authSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getCity(state: IState, action: PayloadAction<string>) {
      state.weather = action.payload
    }
  }

});

export default authSlice.reducer;