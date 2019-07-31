import React from 'react';

import { storiesOf } from '@storybook/react';

import { Text } from './text';

storiesOf('Button', module).add('with text', () => <Text>Hello Text</Text>);
