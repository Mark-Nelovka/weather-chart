import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import weatherReducer from './weather/weatSlice';
import weatherDetailsReducer from "./weatherDetails/weatDetSlice";

const WeatherPersistConfig = {
  key: 'weather',
  storage,
  blacklist: ["pending"]
};

const WeatherDetailsPersistConfig = {
  key: 'weatherDetails',
  storage,
  blacklist: ["pending"]
};

const WeatherPersistedReducer = persistReducer(WeatherPersistConfig, weatherReducer);
const WeatherDetailsPersistedReducer = persistReducer(WeatherDetailsPersistConfig, weatherDetailsReducer);

const rootReducer = combineReducers({ 
    weather: WeatherPersistedReducer,
    weatherDetails: WeatherDetailsPersistedReducer
})


const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);

export default store;

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;