import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
export const getData = createAsyncThunk(
    'catalog/getData',
    async (_,{rejectWithValue}) => {
        try {
            const response = await axios("https://jsonplaceholder.typicode.com/photos?_limit=10")
            console.log(response)
            if (response.status !== 200){
                throw new Error('error')
            }
            return response.data
        } catch (error){
            return rejectWithValue(error.message)
        }
    }
)
const catalogSlice = createSlice({
    name: 'catalog',
    initialState: {
        data: [],
        status: '',
        error: ''
    },
    extraReducers: {
        [getData.fulfilled] : (state,action) => {
            state.status = 'resolved'
            state.data = action.payload
        },
        [getData.pending] : (state) => {
            state.status = 'loading'
            state.error = null
        },
        [getData.rejected] : (state,action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})
export default catalogSlice.reducer