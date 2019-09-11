import React, { Fragment } from 'react';
import { Box, H3 } from '../atoms';
import { token } from '../utils/structure';

export default { title: token('Color') };

export const primary = () => (
  <Fragment>
    <H3>Primary Light</H3>
    <Box backgroundColor="primary.light" width="100px" height="100px" />
    <H3>Primary Normal</H3>
    <Box backgroundColor="primary.normal" width="100px" height="100px" />
    <H3>Primary Dark</H3>
    <Box backgroundColor="primary.dark" width="100px" height="100px" />
  </Fragment>
);

export const accent = () => (
  <Fragment>
    <H3>Accent Light</H3>
    <Box backgroundColor="accent.4" width="100px" height="100px" />
    <H3>Accent Normal</H3>
    <Box backgroundColor="accent.5" width="100px" height="100px" />
    <H3>Accent Dark</H3>
    <Box backgroundColor="accent.6" width="100px" height="100px" />
  </Fragment>
);
