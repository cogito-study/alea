import React from 'react';
import { Anchor } from './anchor';
import { atom } from '../../utils/structure';
import { Flex } from '../flex/flex';

export default { title: atom('Anchor') };

export const plain = () => <Anchor href="/">Click me!</Anchor>;
export const disabled = () => <Anchor>Click me!</Anchor>;
export const colorful = () => (
  <Flex flexDirection="column">
    <Anchor mb={2} href="/" color="primary.4" hoverColor="primary.8">
      Click me!
    </Anchor>
    <Anchor mb={2} href="/" color="primary.3" hoverColor="primary.4">
      Click me!
    </Anchor>
    <Anchor mb={2} href="/" color="error.5" hoverColor="error.7">
      Click me!
    </Anchor>
    <Anchor mb={2} href="/" color="neutral.7" hoverColor="neutral.9">
      Click me!
    </Anchor>
    <Anchor mb={2} href="/" color="primary.5" hoverColor="primary.7" fontWeight="bold">
      Click me!
    </Anchor>
    <Anchor mb={2} href="/" color="primary.3" hoverColor="primary.5" fontWeight="bold">
      Click me!
    </Anchor>
    <Anchor mb={2} href="/" color="error.5" hoverColor="error.7" fontWeight="bold">
      Click me!
    </Anchor>
    <Anchor mb={2} href="/" color="neutral.7" hoverColor="neutral.9" fontWeight="bold">
      Click me!
    </Anchor>
  </Flex>
);
