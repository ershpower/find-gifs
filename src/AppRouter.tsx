import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './consts';
import { TrendsPage } from './pages';
import App from 'App';

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
                ],
            },
        ],
        { basename: '/find-gifs' }
    );
    return <RouterProvider router={router} />;
};

export default AppRouter;
