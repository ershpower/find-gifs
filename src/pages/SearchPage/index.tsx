import React, {
    ChangeEvent,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

import { skipToken } from '@reduxjs/toolkit/query';
import { useGetGifBySearchStrQuery } from 'api';
import { GifsField, WithObserver } from 'components';
import { useDebounce } from 'hooks';
import { TextField } from 'ui-kit';

const SearchPage = () => {
    const [searchStr, setSearchStr] = useState('');
    const [offset, setOffset] = useState(9);

    const debouncedValue = useDebounce(searchStr, 500);

    const { data: gifs = [] } = useGetGifBySearchStrQuery(
        !debouncedValue
            ? skipToken
            : {
                  str: debouncedValue,
                  offset: offset,
              },
        {
            refetchOnMountOrArgChange: true,
        }
    );

    useEffect(() => {
        if (!debouncedValue) setOffset(0);
    }, [debouncedValue]);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchStr(value);
    };

    const handleGetGifs = useCallback(() => {
        setOffset((prev) => prev + 9);
    }, []);

    return (
        <div>
            <TextField value={searchStr} onChange={handleChange} />
            <WithObserver callback={handleGetGifs}>
                <GifsField gifs={gifs} />
            </WithObserver>
        </div>
    );
};

export default SearchPage;
