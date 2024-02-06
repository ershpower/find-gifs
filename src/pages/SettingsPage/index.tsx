import React from 'react';

import { LOCAL_STORAGE_ANIMATE_KEY, Variants } from '../../consts';
import { setVariant, useAppDispatch } from '../../slices/animatedBgSlice';
import { Button, Stack } from '@mui/material';

const SettingsPage = () => {
    const dispatch = useAppDispatch();

    const handleChangeVariant = (variant: Variants) => {
        localStorage.setItem(LOCAL_STORAGE_ANIMATE_KEY, variant);
        dispatch(setVariant(variant));
    };

    return (
        <Stack gap={'16px'}>
            <Button
                variant={'contained'}
                onClick={() => handleChangeVariant(Variants.slides)}
            >
                slides
            </Button>
            <Button
                variant={'contained'}
                onClick={() => handleChangeVariant(Variants.bubbles)}
            >
                bubbles
            </Button>
            <Button
                variant={'contained'}
                onClick={() => handleChangeVariant(Variants.figures)}
            >
                figures
            </Button>
            если bubbless то подожди пока сыграет анимация (она есть, точно)
        </Stack>
    );
};

export default SettingsPage;
