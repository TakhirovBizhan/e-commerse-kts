import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import ProductUrlSlice from "./ProductUrlSlice";
import CustomFilterSlice from "./CustomFiltersSlice";

const reducers = combineReducers({
    [api.reducerPath]: api.reducer,
    productUrl: ProductUrlSlice,
    customFilters: CustomFilterSlice
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch