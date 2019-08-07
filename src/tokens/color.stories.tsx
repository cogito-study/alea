import React, { Fragment } from 'react';
import { Box, H3 } from '../atoms';
import { token } from '../utils/structure';

export default { title: token('Color') };

export const primary = () => (
  <Fragment>
    <H3>Primary Light</H3>
    <Box backgroundColor="primaryLight" width="100px" height="100px" />
    <H3>Primary</H3>
    <Box backgroundColor="primary" width="100px" height="100px" />
    <H3>Primary Dark</H3>
    <Box backgroundColor="primaryDark" width="100px" height="100px" />
  </Fragment>
);

export const accent = () => (
  <Fragment>
    <H3>Accent Light</H3>
    <Box backgroundColor="accentLight" width="100px" height="100px" />
    <H3>Accent</H3>
    <Box backgroundColor="accent" width="100px" height="100px" />
    <H3>Accent Dark</H3>
    <Box backgroundColor="accentDark" width="100px" height="100px" />
  </Fragment>
);
