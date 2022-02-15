import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    count: 0
}

let counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        plus: (state, payload) => {
            state.count = state.count + 1
        },
        minus: (state, payload) => {
            state.count = state.count - 1
        },
        plusBy : (state,payload) => {
            state.count = state.count + payload
        }
    }
})

export const { plus, minus, plusBy } = counterSlice.actions;
export default counterSlice.reducer;