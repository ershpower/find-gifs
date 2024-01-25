import React, { useEffect, useRef } from 'react';

import { Button, Stack } from '@mui/material';
import { useLazyGetTrendsQuery } from 'api';
import { GifsField } from 'components';
import { MainWrapper } from 'pages/MainPage/style';
import { TextField } from 'ui-kit';

const MainPage = () => {
    const ref = useRef<HTMLDivElement | null>(null);

    const [loadGifs, { data: gifs = [] }] = useLazyGetTrendsQuery();

    useEffect(() => {
        loadGifs();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((item) => {
                    if (item.isIntersecting) {
                        loadGifs();
                    }
                });
            },
            { rootMargin: '60px' }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

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
            <GifsField gifs={gifs} ref={ref} />
        </Stack>
    );
};

export default MainPage;
