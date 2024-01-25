import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Stack } from '@mui/material';
import { useLazyGetTrendsQuery } from 'api';
import { GifsField, WithObserver } from 'components';
import { TextField } from 'ui-kit';

const TrendsPage = () => {
    const [loadGifs, { data: gifs = [] }] = useLazyGetTrendsQuery();

    return (
        <Stack>
            <WithObserver callback={loadGifs}>
                <GifsField gifs={gifs} />
            </WithObserver>
        </Stack>
    );
};

export default TrendsPage;
