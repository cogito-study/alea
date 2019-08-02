import React from 'react';
import { atom } from '../../utils/structure';
import { Box } from './box';

export default { title: atom('Box') };

export const red = () => <Box height="100px" width="100px" backgroundColor="navy" />;
