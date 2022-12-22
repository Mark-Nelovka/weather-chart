import { createSlice } from '@reduxjs/toolkit';
// import { register, login, logOut, refresh } from './weatDetOperations';

const initialState = {
  weatherDetaild: []
};

const authSlice = createSlice({
    name: 'weatDet',
    initialState,
    reducers: {}
});

export default authSlice.reducer;