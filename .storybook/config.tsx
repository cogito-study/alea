import React, { Fragment } from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

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

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

configure(require.context('../src', true, /\.stories\.(ts|tsx|mdx)$/), module);
