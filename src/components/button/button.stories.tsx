import React from 'react';
// import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from './button';

export default { title: 'Button' };

export const withText = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const withEmoji = () => (
  <Button onClick={action('clicked')} height="34px">
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')} height="34px">
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
