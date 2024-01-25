import React, { forwardRef } from 'react';

import { Box, Grid } from '@mui/material';
import { Card, Wrapper } from 'components/GifsField/style';
import { IGIf } from 'types';

interface IGifsFieldProps {
    gifs: IGIf[];
}
const GifsField = forwardRef<HTMLDivElement, IGifsFieldProps>((props, ref) => {
    const { gifs } = props;

    return (
        <Box sx={Wrapper}>
            <Grid container spacing={2}>
                {gifs.map((gif) => (
                    <Grid key={gif.id} item md={4}>
                        <Box sx={Card}>
                            <img
                                src={gif.images.downsized.url}
                                alt={gif.username}
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <div ref={ref}></div>
        </Box>
    );
});

GifsField.displayName = 'GifsField';

export default GifsField;
