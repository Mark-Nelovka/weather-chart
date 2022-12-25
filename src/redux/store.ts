import { configureStore } from '@reduxjs/toolkit';
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


const persistConfig = {
  key: 'weather',
  storage,
};

const persistedReducer = persistReducer(persistConfig, weatherReducer);

const store = configureStore({
  reducer: {
    weather: persistedReducer,
    weatherDetails: weatherDetailsReducer
  },
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