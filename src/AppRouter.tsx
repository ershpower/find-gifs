import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './consts';
import { AuthPage, MainPage } from './pages';

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: routes.AUTH,
            element: <AuthPage />,
        },
        {
            path: routes.MAIN,
            element: <MainPage />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default AppRouter;
