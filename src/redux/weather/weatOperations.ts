import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

axios.defaults.baseURL = '';



// const getCity = createAsyncThunk('weather/getCity', async (item, thunkApi) => {
//     console.log(item)
//     console.log(thunkApi)
// });

const getCity = createAction("weather/getCity")



export {getCity};