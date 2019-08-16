import React from 'react';
import { Box, H2 } from '../atoms';
import { token } from '../utils/structure';

export default { title: token('Border') };

export const border_0 = () => (
  <>
    <H2>Border 0</H2>
    <Box width="100px" height="100px" border={0} borderColor="accent.normal" bg="primary.normal" />
  </>
);

export const border_1 = () => (
  <>
    <H2>Border 1</H2>
    <Box width="100px" height="100px" border={1} borderColor="accent.normal" bg="white.normal" />
  </>
);

export const border_2 = () => (
  <>
    <H2>Border 2</H2>
    <Box width="100px" height="100px" border={2} borderColor="accent.normal" bg="white.normal" />
  </>
);

export const border_3 = () => (
  <>
    <H2>Border 3</H2>
    <Box width="100px" height="100px" border={3} borderColor="accent.normal" bg="white.normal" />
  </>
);
