import {createAsyncThunk} from "@reduxjs/toolkit";
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