import React, { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router';

import { AUTH_KEY, AUTH_USER, routes } from 'consts';
import { useLocalStorage } from 'hooks';

const ProtectedPage: FC<PropsWithChildren> = ({ children }) => {
    const { value } = useLocalStorage(AUTH_KEY);

    const isAuth = JSON.stringify(value) === JSON.stringify(AUTH_USER);

    return isAuth ? <>{children}</> : <Navigate to={routes.AUTH} />;
};

export default ProtectedPage;
