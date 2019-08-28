import { text } from '@storybook/addon-knobs';
import React from 'react';
import { atom } from '../../utils/structure';
import { Paragraph } from './paragraph';

export default { title: atom('Paragraph') };

export const small = () => <Paragraph paragraphSize="small">{text('Content', 'small')}</Paragraph>;

export const medium = () => <Paragraph>{text('Content', 'medium')}</Paragraph>;

export const large = () => <Paragraph paragraphSize="large">{text('Content', 'large')}</Paragraph>;
