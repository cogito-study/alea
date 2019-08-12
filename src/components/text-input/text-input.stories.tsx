import React from 'react';
import { TextInput } from './text-input';
import { component } from '../../utils/structure';
import { action } from '@storybook/addon-actions';

export default { title: component('TextInput') };

export const normal = () => <TextInput label="Favourite paper brand" placeholder="Tell me..." />;
export const disabled = () => <TextInput label="Favourite paper brand" placeholder="Tell me..." disabled />;
export const error = () => (
  <TextInput label="Favourite paper brand" placeholder="Tell me..." error="You have a bad taste..." />
);
export const withText = () => (
  <TextInput label="Hand size" placeholder="Type here..." help="We handle this information privately" />
);
export const valueSet = () => {
  return (
    <TextInput label="Hand size" placeholder="Type here..." help="We handle this information privately" value="13.5" />
  );
};
export const controlledMode = () => {
  return (
    <TextInput
      label="Hand size"
      placeholder="Type here..."
      help="We handle this information privately"
      onChange={(event) => {
        action(`event: ${event}`)();
      }}
    />
  );
};
export const wip_withIcon = () => (
  <TextInput label="Best skill with your nose" placeholder="Sorry for being nosy..." icon="" />
);
export const wip_withIconAndText = () => (
  <TextInput label="Hand size" placeholder="Type here..." help="We handle this information privately" icon="" />
);
