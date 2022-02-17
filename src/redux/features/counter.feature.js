import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    count: 5
}

let counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        plus: (state, action) => {
            state.count = state.count + 1
        },
        minus: (state, action) => {
            state.count = state.count - 1
        },
        plusBy : (state,action) => {
            state.count = state.count + action.payload
        }
    }
})

export const { plus, minus, plusBy } = counterSlice.actions;
export default counterSlice.reducer;