import React from 'react';
import { action } from '@storybook/addon-actions';

import { Button } from './button';
import { atom } from '../../utils/structure';

export default { title: atom('Button') };

export const primary = () => <Button onClick={action('clicked')}>primary</Button>;

export const secondary = () => (
  <Button variant="secondary" onClick={action('clicked')}>
    secondary
  </Button>
);

export const tertiary = () => (
  <Button variant="tertiary" onClick={action('clicked')}>
    tertiary
  </Button>
);
