import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from './box';

storiesOf('Box', module).add('with text', () => <Box height="100" width="100" backgroundColor="red" />);
