import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './consts';
import App from 'App';
import { RandomPage, SearchPage, SettingsPage, TrendsPage } from 'pages';

const AppRouter = () => {
    const router = createBrowserRouter(
        [
            {
                path: '/',
                element: <App />,
                children: [
                    {
                        index: true,
                        element: <TrendsPage />,
                    },
                    {
                        path: routes.SEARCH,
                        element: <SearchPage />,
                    },
                    {
                        path: routes.RANDOM,
                        element: <RandomPage />,
                    },
                    {
                        path: routes.SETTINGS,
                        element: <SettingsPage />,
                    },
                ],
            },
        ],
        { basename: '/find-gifs' }
    );
    return <RouterProvider router={router} />;
};

export default AppRouter;
