import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    loading:false,
    users:[],
    errors:null
}
export const getUsers = createAsyncThunk('users/getUsers',async function () {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data;
})

const usersSlice = createSlice({
    name:'users',
    initialState:initialState,
    extraReducers: function (builder) {
        builder.addCase(getUsers.pending , (state,action)=>{
            state.loading = true;
        }).addCase(getUsers.fulfilled,(state,action)=>{
            state.loading = false;
            state.users = action.payload;
        }).addCase(getUsers.rejected,(state,action)=>{
            state.loading = false;
            state.errors = 'Oops! Something went wrong';
        })
    }
})

export default usersSlice.reducer;