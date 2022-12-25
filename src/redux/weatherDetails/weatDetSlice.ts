import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCityWithDetails, cleanStore } from "./weatDetOperations";

export interface IItems {
  id: number,
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
  dtCreated: number,
  history: {
    main: {
      temp: number
    }
  }[];
}

export interface IState {
  weatherDetails: IItems[]
}

export const initialState: IState = {
  weatherDetails: []
};

const authSlice = createSlice({
  name: 'weatherDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCityWithDetails.fulfilled, (state: IState, action: PayloadAction<IItems>) => {
      state.weatherDetails = [action.payload];
    });
    builder.addCase(cleanStore, (state: IState, action: PayloadAction) => {
      state.weatherDetails = [];
    });
  },
  
});

export default authSlice.reducer;