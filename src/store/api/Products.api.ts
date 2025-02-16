import { IData } from "../../config/DataInterfaces";
import { api } from "./api";

export const productsApi = api.injectEndpoints({
    endpoints: builder => ({
        getProducts: builder.query<IData[], { page?: number, filter?: string, search?: string }>({
            query: ({ page = 0, filter, search }) => {
                const urlParams = new URLSearchParams();
                urlParams.append("offset", page.toString())
                urlParams.append("limit", '9')

                if (filter) urlParams.append('filter', filter);

                if (search) urlParams.append('title', search);

                return `/products?${urlParams.toString()}`
            },
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