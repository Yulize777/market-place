import {configureStore} from "@reduxjs/toolkit";
import cardSlice from "./reducers/cardSlice";
import catalogSlice from "./reducers/catalogSlice";
export const store = configureStore({
    reducer: {
        cardSlice,
        catalogSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: {

                }
            }
        })
})