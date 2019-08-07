import React, { Fragment } from 'react';
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

export const disabled = () => (
  <Fragment>
    {/** TODO: Box it! */}
    <Button onClick={action('clicked')} disabled>
      primary
    </Button>
    <Button variant="secondary" onClick={action('clicked')} disabled>
      secondary
    </Button>
    <Button variant="tertiary" onClick={action('clicked')} disabled>
      tertiary
    </Button>
  </Fragment>
);
