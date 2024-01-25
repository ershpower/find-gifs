import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { routes } from './consts';
import { AuthPage, MainPage } from './pages';
import { ProtectedPage } from 'components';

const AppRouter = () => {
    // const router = createBrowserRouter(
    //     [
    //         {
    //             path: routes.AUTH,
    //             element: <AuthPage />,
    //         },
    //         {
    //             path: routes.MAIN,
    //             element: (
    //                 <ProtectedPage>
    //                     <MainPage />
    //                 </ProtectedPage>
    //             ),
    //         },
    //     ],
    //     { basename: '/find-gifs' }
    // );

    // Use browser route for production. Hash router only for gh-pages
    return (
        <HashRouter>
            <Routes>
                <Route path={routes.AUTH} element={<AuthPage />} />
                <Route
                    index={true}
                    path={routes.MAIN}
                    element={
                        <ProtectedPage>
                            <MainPage />
                        </ProtectedPage>
                    }
                />
            </Routes>
        </HashRouter>
    );
};

export default AppRouter;
