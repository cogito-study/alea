import React from 'react';
import { Anchor } from './anchor';
import { atom } from '../../utils/structure';

export default { title: atom('Anchor') };

export const plain = () => <Anchor href="/">Click me!</Anchor>;
export const disabled = () => <Anchor>Click me!</Anchor>;
