import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICategory, IData } from "../../config/DataInterfaces";

const API_URL = 'https://api.escuelajs.co/api/v1';

const api = createApi({
    reducerPath: 'api',
    tagTypes: '',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),

    endpoints: builder => ({
        getProducts: builder.query<IData, number | void>({
            query: (page = 0) => `/products?offset=${page}&limit=10`,
        }),
        getAllProducts: builder.query<IData, void>({
            query: () => `/products`,
        }),
        getProduct: builder.query<ICategory, number | void>({
            query: (id) => `/products/${id}`,
        }),

        getCategories: builder.query<ICategory, void>({
            query: () => `/categories`,
        }),
        getCategory: builder.query<ICategory, number | void>({
            query: (id) => `/categories/${id}`,
        }),
    })
})