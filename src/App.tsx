import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { AnimatedBackground } from './components';
import { Button, Stack } from '@mui/material';
import { routes } from 'consts';

const links = [
    { title: 'Trends', path: routes.TRENDS },
    { title: 'Search', path: routes.SEARCH },
    { title: 'Random', path: routes.RANDOM },
];
function App() {
    return (
        <div className="App">
            <AnimatedBackground />
            <div className="main-content">
                <Stack
                    mb={2}
                    direction={'row'}
                    justifyContent={'center'}
                    gap={'18px'}
                >
                    {links.map((link) => (
                        <NavLink key={Math.random()} to={link.path}>
                            <Button variant={'contained'}>{link.title}</Button>
                        </NavLink>
                    ))}
                    <NavLink to={routes.SETTINGS}>
                        <Button
                            sx={{
                                background: '#cfcfcf',
                                '&:hover': { background: '#2caecb' },
                            }}
                            variant={'outlined'}
                        >
                            Settings
                        </Button>
                    </NavLink>
                </Stack>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
