import React from 'react';

import { Box, Grid } from '@mui/material';
import { Card, Wrapper } from 'components/GifsField/style';

const GifsField = () => {
    return (
        <Box sx={Wrapper}>
            <Grid container spacing={2}>
                <Grid item md={4}>
                    <Box sx={Card}>
                        <img
                            src="https://vgif.ru/gifs/166/vgif-ru-42236.webp"
                            alt="gifka"
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default GifsField;
