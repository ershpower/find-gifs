import { SxProps } from '@mui/material';

export const TextFieldStyle: SxProps = {
    width: '100%',
    '& input': {
        padding: '11px 16px',
        color: '#1de31d',
    },
    '& fieldset': {
        borderColor: '#688bf9',
    },

    '.MuiInputBase-root ': {
        '&:hover': {
            '& fieldset': {
                borderColor: '#688bf9',
            },
        },
    },
};
