import React from 'react';
import { atom } from '../../utils/structure';
import { H1, H2, H3, H4 } from './heading';

export default { title: atom('Header') };

export const h1 = () => <H1>Heading 1</H1>;
export const h2 = () => <H2>Heading 2</H2>;
export const h3 = () => <H3>Heading 3</H3>;
export const h4 = () => <H4>Heading 4</H4>;
