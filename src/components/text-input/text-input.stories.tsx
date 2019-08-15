import React, { ChangeEvent } from 'react';
import { TextInput } from './text-input';
import { component } from '../../utils/structure';
import { action } from '@storybook/addon-actions';
import { EmailIcon } from '../../atoms/icon/icon';

export default { title: component('TextInput') };

export const normal = () => <TextInput label="Favourite paper brand" placeholder="Tell me..." />;
export const disabled = () => <TextInput label="Favourite paper brand" placeholder="IDC" disabled />;
export const error = () => <TextInput label="Password" placeholder="Tell me..." error="Too short..." />;
export const withText = () => (
  <TextInput label="Hand size" placeholder="Type here..." help="We handle this information privately" />
);
export const withOnChange = () => {
  return (
    <TextInput
      label="Hand size"
      placeholder="Type here..."
      help="We handle this information privately"
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        action(`event: ${event.target.value}`)();
      }}
    />
  );
};
export const wip_withIcon = () => (
  <TextInput label="Best skill with your nose" placeholder="Sorry for being nosy..." icon={<EmailIcon />} />
);
export const wip_withIconAndText = () => (
  <TextInput
    label="Hand size"
    placeholder="Type here..."
    help="We handle this information privately"
    icon="email-outline"
  />
);
