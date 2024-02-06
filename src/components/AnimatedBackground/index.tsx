import React from 'react';

import { Variants } from '../../consts';
import { useAppSelector } from '../../slices/animatedBgSlice';
import { Variant1 } from './Variant1';
import { Variant2 } from './Variant2';
import { Variant3 } from './Variant3';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Box } from '@mui/material';

const AnimatedBackground = () => {
    const { variant } = useAppSelector((state) => state.animateReducer);

    const animatedBg: Record<Variants, ReactJSXElement> = {
        [Variants.figures]: <Variant1 />,
        [Variants.slides]: <Variant2 />,
        [Variants.bubbles]: <Variant3 />,
    };

    return <Box>{animatedBg[variant as Variants]}</Box>;
};

export default AnimatedBackground;
