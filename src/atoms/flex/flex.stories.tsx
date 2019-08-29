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

export const wrap = () => (
  <Flex flexDirection="row" flexWrap="wrap">
    <Box height="100px" width="100px" border="2px solid red" backgroundColor="primary.light" m="auto" />
    <Box height="100px" width="100px" border="2px solid red" backgroundColor="primary.normal" m="auto" />
    <Box height="100px" width="100px" border="2px solid red" backgroundColor="primary.dark" m="auto" />
    <Box height="100px" width="100px" border="2px solid red" backgroundColor="primary.light" m="auto" />
    <Box height="100px" width="100px" border="2px solid red" backgroundColor="primary.normal" m="auto" />
    <Box height="100px" width="100px" border="2px solid red" backgroundColor="primary.dark" m="auto" />
  </Flex>
);

export const complex = () => (
  <Flex flexDirection="row" flexWrap="wrap">
    <Box minHeight="200px" minWidth="200px" flexGrow={1} border="2px solid red" backgroundColor="primary.light" />
    <Box minHeight="100px" minWidth="100px" flexGrow={2} border="2px solid red" backgroundColor="primary.normal" />
    <Box minHeight="300px" minWidth="100px" flexGrow={1} border="2px solid red" backgroundColor="primary.dark" />
    <Box minHeight="200px" minWidth="200px" flexGrow={1} border="2px solid red" backgroundColor="primary.light" />
    <Box minHeight="100px" minWidth="100px" flexGrow={2} border="2px solid red" backgroundColor="primary.normal" />
    <Box minHeight="300px" minWidth="100px" flexGrow={1} border="2px solid red" backgroundColor="primary.dark" />
  </Flex>
);

export const page = () => (
  <Flex flexDirection="row" flexWrap="wrap" textAlign="center">
    <Box p={3} flex="1 100%" backgroundColor="primary.light">
      Heading
    </Box>
    <Box p={3} flex={[null, null, '3 0px']} textAlign="left" order={[0, 0, 2]} backgroundColor="primary.normal">
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
      quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
      ultricies mi vitae est. Mauris placerat eleifend leo.
    </Box>
    <Box p={3} flex={['1 100%', '1 0 0']} order={[0, 0, 1]} backgroundColor="primary.dark">
      Aside 1
    </Box>
    <Box p={3} flex={['1 100%', '1 0 0']} order={[0, 0, 3]} backgroundColor="accent.light">
      Aside 2
    </Box>
    <Box p={3} flex="1 100%" order={[0, 0, 4]} backgroundColor="accent.normal">
      Footer
    </Box>
  </Flex>
);
