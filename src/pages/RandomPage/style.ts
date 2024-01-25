import { SxProps } from '@mui/material';

export const Wrapper: SxProps = {
    marginTop: '40px',
    img: {
        marginTop: '60px',
        maxHeight: '600px',
        maxWidth: '600px',
    },
    '& .MuiSkeleton-root': {
        marginTop: '-80px',
    },
};
