import React, { useEffect } from 'react';

import CachedIcon from '@mui/icons-material/Cached';
import { Button, Skeleton, Stack } from '@mui/material';
import { useLazyGetRandomGifQuery } from 'api';
import { Wrapper } from 'pages/RandomPage/style';

const RandomPage = () => {
    const [getRandomGif, { data: randomGIf, isFetching, isLoading }] =
        useLazyGetRandomGifQuery();

    useEffect(() => {
        getRandomGif();
    }, []);

    const handleUpdateRandomGif = () => getRandomGif();

    const isLoad = isLoading || isFetching;

    return (
        <div>
            <Stack sx={Wrapper} alignItems={'center'}>
                <Button
                    size={'large'}
                    variant={'contained'}
                    endIcon={<CachedIcon />}
                    onClick={handleUpdateRandomGif}
                >
                    Update
                </Button>
                {!isLoad && (
                    <img src={randomGIf?.images.downsized.url} alt="" />
                )}
                {isLoad && <Skeleton width={'600px'} height={'600px'} />}
            </Stack>
        </div>
    );
};

export default RandomPage;
