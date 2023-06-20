import {getData} from "../thunks/catalogGetData";
import {createSlice} from "@reduxjs/toolkit";

const catalogSlice = createSlice({
    name: 'catalog',
    initialState: {
        data: [],
        status: '',
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(getData.fulfilled, (state, {payload}) => {
                state.data = payload
                state.status = ''
            })
            .addCase(getData.pending, (state, {payload}) => {
                state.status = 'loading'
            })
            .addCase(getData.rejected, (state, {payload}) => {
                state.status = 'rejected'
                state.error = payload
            })
    }
})
export default catalogSlice.reducer