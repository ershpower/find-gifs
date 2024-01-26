import React, { FC } from 'react';

import IMG from './img.png';
import { Stack } from '@mui/material';

interface IErrorProp {
    title?: string;
}
const Error: FC<IErrorProp> = ({ title = 'Ошибка' }) => {
    return (
        <Stack alignItems={'center'}>
            <p>{title}</p>
            <img src={IMG} alt="" width={'300px'} height={'300px'} />
        </Stack>
    );
};

export default Error;
