import React from 'react';
import { TextInput } from './text-input';
import { component } from '../../utils/structure';

export default { title: component('TextInput') };

export const normal = () => <TextInput label="Favourite paper brand" placeholder="Tell me..." />;
export const withIcon = () => (
  <TextInput label="Best skill with your nose" placeholder="Sorry for being nosy..." icon="" />
);
export const withText = () => (
  <TextInput label="Hand size" placeholder="Type here..." help="We handle this information privately" />
);
export const withIconAndText = () => (
  <TextInput label="Hand size" placeholder="Type here..." help="We handle this information privately" icon="" />
);
