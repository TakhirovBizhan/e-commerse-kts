import { IData, TFilters } from "../../config/DataInterfaces";
import { api } from "./api";


export const productsApi = api.injectEndpoints({
    endpoints: builder => ({
        getProducts: builder.query<IData[], { page?: number, rangeFilter?: TFilters, search?: string } | void>({
            query: ({ page = 0, rangeFilter = { price_min: null, price_max: null }, search = '' } = {}) => {
                const urlParams = new URLSearchParams();
                urlParams.append("offset", page.toString())
                urlParams.append("limit", '9')

                if (rangeFilter.price_min && rangeFilter.price_max) {
                    urlParams.set('price_max', rangeFilter.price_max.toString());
                    urlParams.set('price_min', rangeFilter.price_min.toString());
                } else {
                    urlParams.delete('price_min');
                    urlParams.delete('price_max');
                }


                if (search) {
                    urlParams.set('title', search);
                } else {
                    urlParams.delete('title');
                }

                return `/products?${urlParams.toString()}`
            },
            providesTags: ['products']
        }),
        getAllProducts: builder.query<IData[], { rangeFilter?: TFilters, search?: string } | void>({
            query: ({ rangeFilter = { price_min: null, price_max: null }, search } = {}) => {
                const urlParams = new URLSearchParams();
                if (rangeFilter.price_min && rangeFilter.price_max) {
                    urlParams.set('price_max', rangeFilter.price_max.toString());
                    urlParams.set('price_min', rangeFilter.price_min.toString());
                } else {
                    urlParams.delete('price_min');
                    urlParams.delete('price_max');
                }

                if (search) {
                    urlParams.set('title', search);
                } else {
                    urlParams.delete('title');
                }
                console.log(urlParams.toString());
                console.log(rangeFilter)

                return `/products?${urlParams.toString()}`
            },
            providesTags: ['products']
        }),
        getProduct: builder.query<IData, number | void>({
            query: (id) => `/products/${id}`,
        }),
    })
})

export const { useGetProductsQuery, useGetAllProductsQuery, useGetProductQuery } = productsApi;