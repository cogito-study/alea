import React from 'react';

import { Paragraph } from './paragraph';
import { atom } from '../../utils/structure';

export default { title: atom('Paragraph') };

export const small = () => <Paragraph paragraphSize="small">small</Paragraph>;

export const medium = () => <Paragraph>medium</Paragraph>;

export const large = () => <Paragraph paragraphSize="large">large</Paragraph>;
