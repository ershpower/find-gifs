import React from 'react';

import { Button, Stack } from '@mui/material';
import { useGetTrendsQuery } from 'api';
import { GifsField } from 'components';
import { MainWrapper } from 'pages/MainPage/style';
import { TextField } from 'ui-kit';

const MainPage = () => {
    const { data = [] } = useGetTrendsQuery();
    console.log(data);

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
            <GifsField gifs={data} />
        </Stack>
    );
};

export default MainPage;
