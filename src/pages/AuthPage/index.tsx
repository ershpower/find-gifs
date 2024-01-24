import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router';

import { Btn, Cred, Wrapper } from './style';
import { Box, Button, Stack } from '@mui/material';
import { AUTH_KEY, AUTH_USER, routes } from 'consts';
import { useLocalStorage } from 'hooks';
import { TextField } from 'ui-kit';
const AuthPage = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const { value, setValue } = useLocalStorage(AUTH_KEY);

    const handleChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLogin(value);
    };

    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);
    };

    const handleLogin = () => {
        const isAuth = JSON.stringify(value) === JSON.stringify(AUTH_USER);
        if (!isAuth) return;
        setValue({
            login,
            password,
        });
        navigate(routes.MAIN);
    };

    return (
        <Stack sx={Wrapper} alignItems={'center'}>
            <Stack direction={'row'} gap={'40px'}>
                <TextField
                    value={login}
                    onChange={handleChangeLogin}
                    placeholder={'Логин'}
                />
                <TextField
                    value={password}
                    onChange={handleChangePassword}
                    placeholder={'Пароль'}
                />
            </Stack>
            <Button onClick={handleLogin} sx={Btn} variant="contained">
                Войти
            </Button>
            <Box sx={Cred}>
                <p>Логин - admin</p>
                <p>Пароль - admin</p>
            </Box>
        </Stack>
    );
};

export default AuthPage;
