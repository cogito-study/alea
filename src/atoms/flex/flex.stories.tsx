import React from 'react';
import { atom } from '../../utils/structure';
import { Box } from '../';
import { Flex } from './flex';

export default { title: atom('Flex') };

export const row = () => (
  <Flex flexDirection="row" alignItems="center" justifyContent="center">
    <Box height="100px" width="100px" backgroundColor="primary.light" m={2} />
    <Box height="100px" width="100px" backgroundColor="primary.normal" m={2} />
    <Box height="100px" width="100px" backgroundColor="primary.dark" m={2} />
  </Flex>
);

export const column = () => (
  <Flex flexDirection="column" alignItems="center" justifyContent="center">
    <Box height="100px" width="100px" backgroundColor="primary.light" m={2} />
    <Box height="100px" width="100px" backgroundColor="primary.normal" m={2} />
    <Box height="100px" width="100px" backgroundColor="primary.dark" m={2} />
  </Flex>
);
