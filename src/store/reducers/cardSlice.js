import {createSlice} from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'card',
    initialState: {
        value: 1
    },
    reducers: {
        increment: (state, action) => {
           state.value += action.payload
        },
        decrement: (state, action) => {
            if (state.value === 0) {
                 state.value = 0
            } else {
                state.value -= action.payload
            }
        }
    }
})
export const {increment,decrement} = cardSlice.actions
export default cardSlice.reducer