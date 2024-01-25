import React, { useEffect, useRef } from 'react';

import { Button, Stack } from '@mui/material';
import { useGetTrendsQuery } from 'api';
import { GifsField } from 'components';
import { MainWrapper } from 'pages/MainPage/style';
import { TextField } from 'ui-kit';

const MainPage = () => {
    const { data = [] } = useGetTrendsQuery();

    const ref = useRef<Element | null>(null);

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((item) => {
            if (item.isIntersecting) {
                console.log('fewf');
            }
        });
    });

    if (ref.current) {
        observer.observe(ref.current);
    }

    const handleScroll = (e: any) => {
        // console.log(ref.current?.offsetTop);
        // console.log(e.target.documentElement.scrollTop);
        // console.log();
    };

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
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
            <GifsField gifs={data} ref={ref} />
        </Stack>
    );
};

export default MainPage;
