import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ProductUrlState {
    page: number;
    filter: string;
    search: string;
}

const initialState: ProductUrlState = {
    page: 1,
    filter: '',
    search: '',
};

export const productUrlSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        incrementPage: (state) => {
            state.page = state.page + 1
        },
        decrementPage: (state) => {
            state.page = state.page - 1
        },
        setFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
    },
});

export const { setPage, setFilter, setSearch, incrementPage, decrementPage } = productUrlSlice.actions;
export default productUrlSlice.reducer;