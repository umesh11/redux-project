import {createSlice} from '@reduxjs/toolkit';


 const initialState = [
    {id: '0', name: 'umesh'},
    {id: '1', name: 'jagan'},
    {id: '2', name: 'krish'}
 ]

 const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        
    }
 })

 export const selectAllUsers = (state) => state.users;

 export default usersSlice.reducer;