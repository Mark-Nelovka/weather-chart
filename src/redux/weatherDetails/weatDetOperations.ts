import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


const register = createAsyncThunk('auth/register', async (item, thunkApi) => {
 
});

const login = createAsyncThunk('auth/login', async (item, thunkApi) => {

});

const logOut = createAsyncThunk('auth/logOut', async userToken => {

});

const refresh = createAsyncThunk('auth/current', async (_, thunkApi) => {
  
});

export { register, login, logOut, refresh };