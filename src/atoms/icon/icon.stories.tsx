import React from 'react';

import { atom } from '../../utils/structure';
import { EmailIcon, Loading } from './icon';
import { Box } from '../box/box';
import { Flex } from '../flex/flex';

export default { title: atom('Icon') };

export const email = () => (
  <Box>
    <EmailIcon />
    <EmailIcon color="#876543" variant="outline" />
  </Box>
);

export const loading = () => (
  <Flex alignItems="center">
    {/* <Loading size="16px" />
    <Loading size="32px" />
    <Loading size="64px" />
    <Loading size="128px" />
    <Loading size="256" /> */}
    <Loading size="512px" />
  </Flex>
);
