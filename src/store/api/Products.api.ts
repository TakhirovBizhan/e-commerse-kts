import { IData } from "../../config/DataInterfaces";
import { api } from "./api";

export const productsApi = api.injectEndpoints({
    endpoints: builder => ({
        getProducts: builder.query<IData[], number | void>({
            query: (page = 0) => `/products?offset=${page}&limit=10`,
            providesTags: ['products']
        }),
        getAllProducts: builder.query<IData[], void>({
            query: () => `/products`,
            providesTags: ['products']
        }),
        getProduct: builder.query<IData, number | void>({
            query: (id) => `/products/${id}`,
        }),
    })
})

export const { useGetProductsQuery, useGetAllProductsQuery, useGetProductQuery } = productsApi;