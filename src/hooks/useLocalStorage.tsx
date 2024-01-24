import React, { useEffect, useState } from 'react';

const useLocalStorage = (key: string, defaultValue: any = null) => {
    const [value, setValue] = useState(() => {
        const value = localStorage.getItem(key);
        if (value !== null) {
            return JSON.parse(value);
        }
        return defaultValue;
    });

    useEffect(() => {
        const prepareValue = JSON.stringify(value);
        localStorage.setItem(key, prepareValue);
    }, [value, key]);

    return { value, setValue };
};

export default useLocalStorage;
