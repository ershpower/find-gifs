import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { Stack } from '@mui/material';
import { routes } from 'consts';

const TrendsPage = () => {
    return (
        <div>
            <Stack direction={'row'} justifyContent={'center'} gap={'20px'}>
                <NavLink to={routes.TRENDS}>Fetch</NavLink>
                <NavLink to={routes.TRENDS_INFINITY}>
                    RTK Query бесконечный скрол
                </NavLink>
            </Stack>
            <Outlet />
        </div>
    );
};

export default TrendsPage;
