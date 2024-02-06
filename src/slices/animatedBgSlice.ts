import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { LOCAL_STORAGE_ANIMATE_KEY, Variants } from '../consts';
import { AppDispatch, RootState } from '../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    variant:
        localStorage.getItem(LOCAL_STORAGE_ANIMATE_KEY) || Variants.figures,
};

export const animateSlice = createSlice({
    name: 'animateSlice',
    initialState,
    reducers: {
        setVariant: (state, action: PayloadAction<Variants>) => {
            state.variant = action.payload;
        },
    },
});

export const { setVariant } = animateSlice.actions;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
