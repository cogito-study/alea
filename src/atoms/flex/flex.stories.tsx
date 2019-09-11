import React from 'react';
import { atom } from '../../utils/structure';
import { Box } from '../';
import { Flex } from './flex';

export default { title: atom('Flex') };

export const row = () => (
  <Flex flexDirection="row" alignItems="center" justifyContent="center">
    <Box height="100px" width="100px" backgroundColor="primary.2" m={2} />
    <Box height="100px" width="100px" backgroundColor="primary.4" m={2} />
    <Box height="100px" width="100px" backgroundColor="primary.6" m={2} />
  </Flex>
);

export const column = () => (
  <Flex flexDirection="column" alignItems="center" justifyContent="center">
    <Box height="100px" width="100px" backgroundColor="primary.2" m={2} />
    <Box height="100px" width="100px" backgroundColor="primary.4" m={2} />
    <Box height="100px" width="100px" backgroundColor="primary.6" m={2} />
  </Flex>
);

export const wrap = () => (
  <Flex flexDirection="row" flexWrap="wrap">
    <Box height="100px" width="100px" border="2px solid red" backgroundColor="primary.2" m="auto" />
    <Box height="100px" width="100px" border="2px solid red" backgroundColor="primary.4" m="auto" />
    <Box height="100px" width="100px" border="2px solid red" backgroundColor="primary.6" m="auto" />
    <Box height="100px" width="100px" border="2px solid red" backgroundColor="primary.2" m="auto" />
    <Box height="100px" width="100px" border="2px solid red" backgroundColor="primary.4" m="auto" />
    <Box height="100px" width="100px" border="2px solid red" backgroundColor="primary.6" m="auto" />
  </Flex>
);

export const complex = () => (
  <Flex flexDirection="row" flexWrap="wrap">
    <Box minHeight="200px" minWidth="200px" flexGrow={1} border="2px solid red" backgroundColor="primary.2" />
    <Box minHeight="100px" minWidth="100px" flexGrow={2} border="2px solid red" backgroundColor="primary.4" />
    <Box minHeight="300px" minWidth="100px" flexGrow={1} border="2px solid red" backgroundColor="primary.6" />
    <Box minHeight="200px" minWidth="200px" flexGrow={1} border="2px solid red" backgroundColor="primary.2" />
    <Box minHeight="100px" minWidth="100px" flexGrow={2} border="2px solid red" backgroundColor="primary.4" />
    <Box minHeight="300px" minWidth="100px" flexGrow={1} border="2px solid red" backgroundColor="primary.6" />
  </Flex>
);

export const page = () => (
  <Flex flexDirection="row" flexWrap="wrap" textAlign="center">
    <Box p={3} flex="1 100%" backgroundColor="primary.2">
      Heading
    </Box>
    <Box p={3} flex={[null, null, '3 0px']} textAlign="left" order={[0, 0, 2]} backgroundColor="primary.4">
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
      quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
      ultricies mi vitae est. Mauris placerat eleifend leo.
    </Box>
    <Box p={3} flex={['1 100%', '1 0 0']} order={[0, 0, 1]} backgroundColor="primary.6">
      Aside 1
    </Box>
    <Box p={3} flex={['1 100%', '1 0 0']} order={[0, 0, 3]} backgroundColor="accent.4">
      Aside 2
    </Box>
    <Box p={3} flex="1 100%" order={[0, 0, 4]} backgroundColor="accent.5">
      Footer
    </Box>
  </Flex>
);
