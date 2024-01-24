import React, { ChangeEvent, useState } from 'react';

import { Btn, Cred, Wrapper } from './style';
import { Box, Button, Stack } from '@mui/material';
import { TextField } from 'ui-kit';
const AuthPage = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLogin(value);
    };

    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);
    };

    const handleLogin = () => {
        console.log(login, password);
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
