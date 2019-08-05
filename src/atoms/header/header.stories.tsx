import React from 'react';
import { atom } from '../../utils/structure';
import { Header } from './header';

export default { title: atom('Header') };

export const h1 = () => <Header as="h1">H1 Header</Header>;
export const h2 = () => <Header as="h2">H2 Header</Header>;
export const h3 = () => <Header as="h3">H3 Header</Header>;
export const h4 = () => <Header as="h4">H4 Header</Header>;
