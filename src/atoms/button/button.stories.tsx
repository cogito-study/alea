import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import React, { Fragment } from 'react';
import { atom } from '../../utils/structure';
import { Button } from './button';

export default { title: atom('Button') };

export const primary = () => <Button onClick={action('clicked')}>{text('Content', 'primary')}</Button>;

export const secondary = () => (
  <Button variant="secondary" onClick={action('clicked')}>
    {text('Content', 'secondary')}
  </Button>
);

export const tertiary = () => (
  <Button variant="tertiary" onClick={action('clicked')}>
    {text('Content', 'tertiary')}
  </Button>
);

export const disabled = () => (
  <Fragment>
    {/** TODO: Box it! */}
    <Button onClick={action('clicked')} disabled>
      {text('Primary button content', 'primary')}
    </Button>
    <Button variant="secondary" onClick={action('clicked')} disabled>
      {text('Secondary button content', 'secondary')}
    </Button>
    <Button variant="tertiary" onClick={action('clicked')} disabled>
      {text('Tertiary button content', 'tertiary')}
    </Button>
  </Fragment>
);
