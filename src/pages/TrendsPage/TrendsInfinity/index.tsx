import React, { useCallback, useState } from 'react';

import { Stack } from '@mui/material';
import { skipToken } from '@reduxjs/toolkit/query';
import { useGetTrendsQuery } from 'api';
import { GifsField, WithObserver } from 'components';

const TrendsInfinity = () => {
    const [offset, setOffset] = useState(0);

    const { data: gifs = [] } = useGetTrendsQuery(
        offset === 0 ? skipToken : offset,
        {
            refetchOnMountOrArgChange: true,
        }
    );

    const handleGetGifs = useCallback(() => {
        setOffset((prev) => prev + 9);
    }, []);
    return (
        <Stack>
            <WithObserver callback={handleGetGifs}>
                <GifsField gifs={gifs} />
            </WithObserver>
        </Stack>
    );
};

export default TrendsInfinity;
