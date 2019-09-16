import React from 'react';

import { atom } from '../../utils/structure';
import { Icon } from './icon';
import { Box } from '../box/box';
import { Flex } from '../flex/flex';

export default { title: atom('Icon') };

export const email = () => (
  <Box>
    <Icon option="email" width="16px" />
    <Icon color="accent.5" option="email" width="32px" />
  </Box>
);

export const loading = () => (
  <Flex alignItems="center">
    <Icon option="loading" width="16px" color="#FF0000" />
    <Icon option="loading" width="32px" color="#231391" />
  </Flex>
);
