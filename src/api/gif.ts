import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GIPHY_KEY, GIPHY_URL } from 'consts';
import { IGIf } from 'types';

let offset = 0;

export const gifApi = createApi({
    reducerPath: 'gifApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${GIPHY_URL}/gifs` }),
    endpoints: (builder) => ({
        getTrends: builder.query<IGIf[], void | number>({
            query: () => {
                offset = offset + 9;
                return `/trending?api_key=${GIPHY_KEY}&limit=${9}&offset=${offset}`;
            },
            transformResponse: (response: { data: any }, meta, arg) =>
                response.data,
            merge: (currentCacheData, responseData, otherArgs) => {
                console.log('123');
                currentCacheData.push(...responseData);
            },
        }),
    }),
});

export const { useGetTrendsQuery, useLazyGetTrendsQuery } = gifApi;
