import React, { Fragment } from 'react';
import { configure, addDecorator } from '@storybook/react';

import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider, GlobalStyle } from '../src/theme';
import { Box } from '../src/atoms';

addDecorator(withKnobs);
addDecorator((story) => (
  <ThemeProvider>
    <Fragment>
      <GlobalStyle />
      <Box p={3}>{story()}</Box>
    </Fragment>
  </ThemeProvider>
));

const req = require.context('../src/', true, /\.stories\.tsx$/);
// ignore typing until 5.2 reaches stable version
// @ts-ignore
configure(req, module);
