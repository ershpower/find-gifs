import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './consts';
import { MainPage } from './pages';

const AppRouter = () => {
    const router = createBrowserRouter(
        [
            {
                index: true,
                path: routes.MAIN,
                element: <MainPage />,
            },
        ],
        { basename: '/find-gifs' }
    );
    return <RouterProvider router={router} />;
};

export default AppRouter;
