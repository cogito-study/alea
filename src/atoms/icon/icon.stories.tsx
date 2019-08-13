import React from 'react';

import { atom } from '../../utils/structure';
import { EmailIcon } from './icon';

export default { title: atom('Icon') };

export const email = () => <EmailIcon color="#345678" variant="fill" size="medium"></EmailIcon>;
