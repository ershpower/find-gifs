import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './consts';
import App from 'App';
import {
    RandomPage,
    SearchPage,
    TrendsDefault,
    TrendsInfinity,
    TrendsPage,
} from 'pages';

const AppRouter = () => {
    const router = createBrowserRouter(
        [
            {
                path: '/',
                element: <App />,
                children: [
                    {
                        element: <TrendsPage />,
                        children: [
                            {
                                index: true,
                                element: <TrendsDefault />,
                            },
                            {
                                path: routes.TRENDS_INFINITY,
                                element: <TrendsInfinity />,
                            },
                        ],
                    },
                    {
                        path: routes.SEARCH,
                        element: <SearchPage />,
                    },
                    {
                        path: routes.RANDOM,
                        element: <RandomPage />,
                    },
                ],
            },
        ],
        { basename: '/find-gifs' }
    );
    return <RouterProvider router={router} />;
};

export default AppRouter;
