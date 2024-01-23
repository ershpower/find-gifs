import React, { FC } from 'react';

import { TextFieldStyle } from './style';
import { TextField as TextFieldMui, TextFieldProps } from '@mui/material';
const TextField: FC<TextFieldProps> = (props) => {
    return <TextFieldMui {...props} sx={TextFieldStyle} />;
};

export default TextField;
