import React from 'react';
import { Box } from '../';
import { atom } from '../../utils/structure';
import { Grid } from './grid';

export default { title: atom('Grid') };

export const simple = () => (
  <Grid gridGap={3} gridTemplateColumns="auto auto auto" backgroundColor="primary.2">
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
  </Grid>
);
export const sizes = () => (
  <Grid gridGap={3} gridTemplateColumns="50px 1fr 1fr" gridTemplateRows="4fr 1fr 1fr" backgroundColor="primary.2">
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
  </Grid>
);

export const colspan = () => (
  <Grid gridGap={2} gridTemplateColumns="auto auto auto" backgroundColor="primary.2">
    <Box p={3} backgroundColor="primary.6" gridColumn="1 / 3" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
  </Grid>
);

export const rowspan = () => (
  <Grid
    gridGap={2}
    gridTemplateColumns="auto auto auto auto"
    gridTemplateRows="auto auto auto"
    backgroundColor="primary.2"
  >
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
    <Box backgroundColor="primary.6" gridRow="1 / 3" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
  </Grid>
);
export const complex = () => (
  <Grid
    gridGap={2}
    gridTemplateColumns="auto auto auto auto"
    gridTemplateRows="auto auto auto"
    backgroundColor="primary.2"
  >
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
    <Box backgroundColor="primary.6" gridRow="1 / 4" gridColumn="1 / 3" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" gridRow="1 / 6" gridColumn="4" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
    <Box p={3} backgroundColor="primary.6" />
  </Grid>
);
export const responsive_layout = () => (
  <Grid
    gridGap={2}
    gridTemplateAreas={[
      `
      'header'
      'aside-1'
      'content'
      'aside-2'
      'footer'
    `,
      `
      'header header header'
      'aside-1 aside-1 aside-1'
      'content content aside-2'
      'footer footer footer'
    `,
      `
      'header header header header'
      'aside-1 content content aside-2'
      'footer footer footer footer'
    `,
    ]}
    backgroundColor="primary.2"
  >
    <Box p={3} textAlign="center" backgroundColor="primary.6" color="neutral.5" gridArea="header">
      Header
    </Box>
    <Box p={3} textAlign="center" backgroundColor="primary.6" color="neutral.5" gridArea="content">
      Content
    </Box>
    <Box p={3} textAlign="center" backgroundColor="primary.6" color="neutral.5" gridArea="aside-1">
      Aside 1
    </Box>
    <Box p={3} textAlign="center" backgroundColor="primary.6" color="neutral.5" gridArea="aside-2">
      Aside 2
    </Box>
    <Box p={3} textAlign="center" backgroundColor="primary.6" color="neutral.5" gridArea="footer">
      Footer
    </Box>
  </Grid>
);
