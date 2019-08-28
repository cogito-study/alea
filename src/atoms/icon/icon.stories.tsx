import React from 'react';

import { atom } from '../../utils/structure';
import { EmailIcon } from './icon';
import { Box } from '../box/box';

export default { title: atom('Icon') };

export const email = () => (
  <Box>
    <EmailIcon />
    <EmailIcon color="#876543" variant="outline" />
  </Box>
);
