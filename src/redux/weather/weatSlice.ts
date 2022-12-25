import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCity, updateTimeAllCity, updateCity, deleteCity } from "./weatOperations";

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
  dtCreated: number
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
    builder.addCase(getCity.fulfilled, (state: IState, action: PayloadAction<IItems>) => {
      const repeteCity = state.weather.find(city => city.id === action.payload.id);
      if (repeteCity) {
        return;
      }
      state.weather = [...state.weather, action.payload];
    });
    builder.addCase(updateTimeAllCity.fulfilled, (state: IState, action: PayloadAction<IItems[]>) => {
      action.payload.forEach((city) => {
        const findIndexUpdateCity = state.weather.findIndex(el => el.id === city.id);
        if (findIndexUpdateCity > -1) {
          state.weather.splice(findIndexUpdateCity, 1, city)
        }
      })
    });
    builder.addCase(updateCity.fulfilled, (state: IState, action: PayloadAction<IItems>) => {
      const findCityUpdate = state.weather.findIndex(el => el.id === action.payload.id);
      if (findCityUpdate > -1) {
        state.weather.splice(findCityUpdate, 1, action.payload)
      }
    });
    builder.addCase(deleteCity.fulfilled, (state: IState, action: PayloadAction<string>) => {
      const filteredCity = state.weather.filter(el => el.id !== +action.payload);
      state.weather = filteredCity;
  });
  },
  
});

export default authSlice.reducer;