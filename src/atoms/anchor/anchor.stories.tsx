import React from 'react';
import { Anchor } from './anchor';
import { atom } from '../../utils/structure';
import { Flex } from '../flex/flex';

export default { title: atom('Anchor') };

export const plain = () => <Anchor href="/">Click me!</Anchor>;
export const disabled = () => <Anchor>Click me!</Anchor>;
export const colorful = () => (
  <Flex flexDirection="column">
    <Anchor mb={2} href="/" color="primary.normal" hoverColor="primary.dark">
      Click me!
    </Anchor>
    <Anchor mb={2} href="/" color="primary.light" hoverColor="primary.normal">
      Click me!
    </Anchor>
    <Anchor mb={2} href="/" color="error.normal" hoverColor="error.dark">
      Click me!
    </Anchor>
    <Anchor mb={2} href="/" color="grey.dark.1" hoverColor="grey.dark.4">
      Click me!
    </Anchor>
    <Anchor mb={2} href="/" color="primary.normal" hoverColor="primary.dark" fontWeight="bold">
      Click me!
    </Anchor>
    <Anchor mb={2} href="/" color="primary.light" hoverColor="primary.normal" fontWeight="bold">
      Click me!
    </Anchor>
    <Anchor mb={2} href="/" color="error.normal" hoverColor="error.dark" fontWeight="bold">
      Click me!
    </Anchor>
    <Anchor mb={2} href="/" color="grey.dark.1" hoverColor="grey.dark.4" fontWeight="bold">
      Click me!
    </Anchor>
  </Flex>
);
