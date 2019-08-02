import React, { Fragment } from 'react';
import { Box, Text } from '../atoms';
import { token } from '../utils/structure';

export default { title: token('Color') };

export const primary = () => (
  <Fragment>
    <Text>Primary</Text>
    <Box backgroundColor="primary" width="100px" height="100px" />
  </Fragment>
);
