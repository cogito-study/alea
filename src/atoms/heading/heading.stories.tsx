import { text } from '@storybook/addon-knobs';
import React from 'react';
import { atom } from '../../utils/structure';
import { H1, H2, H3, H4 } from './heading';

export default { title: atom('Heading') };

export const h1 = () => <H1>{text('Content', 'H1 Heading')}</H1>;
export const h2 = () => <H2>{text('Content', 'H2 Heading')}</H2>;
export const h3 = () => <H3>{text('Content', 'H3 Heading')}</H3>;
export const h4 = () => <H4>{text('Content', 'H4 Heading')}</H4>;
export const colorful = () => (
  <>
    <H1 color="primary.light">{text('Content1', 'H1 Heading')}</H1>
    <H2 color="primary.dark">{text('Content2', 'H2 Heading')}</H2>
    <H3 color="grey.dark.2">{text('Content3', 'H3 Heading')}</H3>
    <H4 color="error.dark">{text('Content4', 'H4 Heading')}</H4>
  </>
);
