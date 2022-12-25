import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCity } from "./weatOperations";

export interface IItems {
  coord: {
    lat: number,
    lon: number
  },
  weather: {
    main: string
  }[],
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
    visibility: number
  },
  wind: {
    speed: number,
    deg: number,
    gust: number
  },
  clouds: {
    all: number
  },
  sys: {
    country: string
  },
  name: string,
  currentDate: {
    day: number,
    mounth: number,
    year: number,
    hours: number,
    minutes: number,
    dayInWeek: string
  }
}

export interface IState {
  weather: IItems[]
}

export const initialState: IState = {
    weather: []
};

const authSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCity.fulfilled,(state: IState, action: PayloadAction<IItems>) => {
      state.weather = [...state.weather, action.payload];
    })
  },
});

export default authSlice.reducer;