import React, { FC } from 'react';

import { Box, Grid } from '@mui/material';
import { Card, Wrapper } from 'components/GifsField/style';
import { IGIf } from 'types';

interface IGifsFieldProps {
    gifs: IGIf[];
}
const GifsField: FC<IGifsFieldProps> = ({ gifs }) => {
    return (
        <Box sx={Wrapper}>
            <Grid container spacing={2}>
                {gifs.map((gif) => (
                    <Grid key={gif.id} item md={4} xs={6}>
                        <Box sx={Card}>
                            <img
                                src={gif.images.downsized.url}
                                alt={gif.username}
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default GifsField;
