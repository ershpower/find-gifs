import React from 'react';

import { Button, Stack } from '@mui/material';
import { useLazyGetTrendsQuery } from 'api';
import { GifsField, WithObserver } from 'components';
import { MainWrapper } from 'pages/MainPage/style';
import { TextField } from 'ui-kit';

const MainPage = () => {
    const [loadGifs, { data: gifs = [] }] = useLazyGetTrendsQuery();

    return (
        <Stack sx={MainWrapper}>
            <TextField />
            <Stack
                mt={2}
                direction={'row'}
                justifyContent={'center'}
                gap={'18px'}
            >
                <Button variant={'contained'}>тест</Button>
                <Button variant={'contained'}>тест2</Button>
                <Button variant={'contained'}>тест3</Button>
            </Stack>
            <WithObserver callback={loadGifs}>
                <GifsField gifs={gifs} />
            </WithObserver>
        </Stack>
    );
};

export default MainPage;
