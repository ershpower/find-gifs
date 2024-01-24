import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './consts';
import { AuthPage, MainPage } from './pages';
import { ProtectedPage } from 'components';

const AppRouter = () => {
    const router = createBrowserRouter(
        [
            {
                path: routes.AUTH,
                element: <AuthPage />,
            },
            {
                path: routes.MAIN,
                element: (
                    <ProtectedPage>
                        <MainPage />
                    </ProtectedPage>
                ),
            },
        ],
        { basename: '/find-gifs' }
    );

    return <RouterProvider router={router} />;
};

export default AppRouter;
