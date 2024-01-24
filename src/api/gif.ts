import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GIPHY_KEY, GIPHY_URL } from 'consts';
import { IGIf } from 'types';

export const gifApi = createApi({
    reducerPath: 'gifApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${GIPHY_URL}/gifs` }),
    endpoints: (builder) => ({
        getTrends: builder.query<IGIf[], void | undefined>({
            query: () => `/trending?api_key=${GIPHY_KEY}`,
            transformResponse: (response: { data: any }, meta, arg) =>
                response.data,
        }),
    }),
});

export const { useGetTrendsQuery } = gifApi;
