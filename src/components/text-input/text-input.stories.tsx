import React, { ChangeEvent } from 'react';
import { TextInput } from './text-input';
import { component } from '../../utils/structure';
import { action } from '@storybook/addon-actions';
import { EmailIcon } from '../../atoms/icon/icon';
import { Paragraph, Anchor } from '../../atoms';

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
export const withIcon = () => (
  <TextInput label="Best skill with your nose" placeholder="Sorry for being nosy..." icon={<EmailIcon />} />
);

export const withIconDisabled = () => (
  <TextInput label="Best skill with your nose" placeholder="Sorry for being nosy..." icon={<EmailIcon />} disabled />
);

export const withIconError = () => (
  <TextInput
    label="Best skill with your nose"
    placeholder="Sorry for being nosy..."
    icon={<EmailIcon />}
    error="Too short"
  />
);

export const withIconAndText = () => (
  <TextInput
    label="Hand size"
    placeholder="Type here..."
    help="We handle this information privately"
    icon={<EmailIcon />}
  />
);

export const withIconAndComplexHelp = () => (
  <TextInput
    label="Hand size"
    placeholder="Type here..."
    help={
      <Paragraph paragraphSize="small" marginTop="8px" color="grey.light.1">
        This element is very{' '}
        <Anchor fontSize="8px" href="/" color="primary.normal" fontWeight="bold">
          complex.
        </Anchor>
      </Paragraph>
    }
    icon={<EmailIcon />}
  />
);

export const withIconAndComplexHelpAndError = () => (
  <TextInput
    label="Hand size"
    placeholder="Type here..."
    error="Error 1234"
    help={
      <Paragraph paragraphSize="small" marginTop="8px" color="grey.light.1">
        This element is very{' '}
        <Anchor fontSize="8px" href="/" color="primary.normal" fontWeight="bold">
          complex.
        </Anchor>
      </Paragraph>
    }
    icon={<EmailIcon />}
  />
);
