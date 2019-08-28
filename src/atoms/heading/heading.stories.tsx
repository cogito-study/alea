import { text } from '@storybook/addon-knobs';
import React from 'react';
import { atom } from '../../utils/structure';
import { H1, H2, H3, H4 } from './heading';

export default { title: atom('Header') };

export const h1 = () => <H1>{text('Content', 'H1 Header')}</H1>;
export const h2 = () => <H2>{text('Content', 'H2 Header')}</H2>;
export const h3 = () => <H3>{text('Content', 'H3 Header')}</H3>;
export const h4 = () => <H4>{text('Content', 'H4 Header')}</H4>;
