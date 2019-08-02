import React from 'react';
import { configure, addDecorator } from '@storybook/react';

import { ThemeProvider } from '../src/theme';
import { Box } from '../src/atoms';

addDecorator((story) => (
  <ThemeProvider>
    <Box p={3}>{story()}</Box>
  </ThemeProvider>
));

const req = require.context('../src/', true, /\.stories\.tsx$/);
// ignore typing until 5.2 reaches stable version
// @ts-ignore
configure(req, module);
