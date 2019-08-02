import React from 'react';
import { Text } from './text';
import { atom } from '../../utils/structure';

export default { title: atom('Text') };

export const hello = () => <Text>Hello Text</Text>;
