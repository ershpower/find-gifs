import React, { useEffect, useState } from 'react';

import { Button, Stack } from '@mui/material';
import { Error, GifsField } from 'components';
import { GIPHY_KEY } from 'consts';
import { IGIf } from 'types';

const URL = `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_KEY}&limit=9`;
const TrendsDefault = () => {
    const [gifs, setGifs] = useState<IGIf[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const [offset, setOffset] = useState(0);

    const fetchGifs = async (offset: number) => {
        try {
            setIsLoading(true);
            const response = await fetch(`${URL}&offset=${offset}`);
            if (response.status === 200 && response.ok) {
                const json = await response.json();
                const data = json.data as IGIf[];
                setGifs((prev) => [...prev, ...data]);
                setOffset((prev) => prev + 9);
            }
            if (!response.ok) {
                setIsError(true);
            }
        } catch (e) {
            setIsLoading(false);
            setIsError(true);
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // fetchGifs(offset);
    }, []);

    const handleLoadNextOffset = () => {
        fetchGifs(offset);
    };

    return (
        <div>
            {!isError && !isLoading && (
                <Stack pb={2}>
                    <GifsField gifs={gifs} />
                    <Button
                        onClick={handleLoadNextOffset}
                        sx={{ marginTop: '20px' }}
                        variant={'contained'}
                    >
                        Загрузить еще
                    </Button>
                </Stack>
            )}
            {isError && <Error title={'Какая-то ошибка при запросе'} />}
        </div>
    );
};

export default TrendsDefault;
