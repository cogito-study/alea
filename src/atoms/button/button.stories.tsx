import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from './button';
import { atom } from '../../utils/structure';

export default { title: atom('Button') };

export const withText = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const withEmoji = () => (
  <Button onClick={action('clicked')} height="34px">
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
