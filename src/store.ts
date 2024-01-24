import { configureStore } from '@reduxjs/toolkit';
import { gifApi } from 'api';

export const store = configureStore({
    reducer: {
        [gifApi.reducerPath]: gifApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(gifApi.middleware),
});
