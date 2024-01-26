import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GIPHY_KEY, GIPHY_URL } from 'consts';
import { IGIf } from 'types';

export const gifApi = createApi({
    reducerPath: 'gifApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${GIPHY_URL}/gifs` }),
    endpoints: (builder) => ({
        getTrends: builder.query<IGIf[], void | number>({
            query: (offset) => {
                return `/trending?api_key=${GIPHY_KEY}&limit=9&offset=${offset}`;
            },
            transformResponse: (response: { data: any }, meta, arg) =>
                response.data,
            merge: (currentCacheData, responseData, otherArgs) => {
                currentCacheData.push(...responseData);
            },
            serializeQueryArgs: ({
                queryArgs,
                endpointDefinition,
                endpointName,
            }) => {
                return endpointName;
            },
        }),
        getRandomGif: builder.query<IGIf, void>({
            query: () => `/random?api_key=${GIPHY_KEY}`,
            transformResponse: (response: { data: any }, meta, arg) =>
                response.data,
        }),
        getGifBySearchStr: builder.query<
            IGIf[],
            { str: string; offset: number }
        >({
            query: ({ str, offset }) => {
                return `/search?api_key=${GIPHY_KEY}&q=${str}&limit=9&offset=${offset}`;
            },
            transformResponse: (response: { data: any }, meta, arg) =>
                response.data,
            merge: (currentCacheData, responseData, otherArgs) => {
                currentCacheData.push(...responseData);
            },
            serializeQueryArgs: ({
                queryArgs,
                endpointDefinition,
                endpointName,
            }) => {
                return queryArgs.str;
            },
        }),
    }),
});

export const {
    useGetTrendsQuery,
    useGetRandomGifQuery,
    useLazyGetRandomGifQuery,
    useGetGifBySearchStrQuery,
} = gifApi;
