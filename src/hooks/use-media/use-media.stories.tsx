import React from 'react';
import { Box } from '../../atoms';
import { hook } from '../../utils/structure';
import { useSmallScreenSize, useWindowSizeType } from './use-media';
/* eslint react-hooks/rules-of-hooks: 0 */

export default { title: hook('useMedia') };

export const smallScreen = () => {
  const isSmallScreen = useSmallScreenSize();

  return (
    <Box bg="accent.normal" color="white">
      {isSmallScreen ? 'small' : 'not small'}
    </Box>
  );
};

export const windowSizeType = () => {
  const sizeType = useWindowSizeType();

  return (
    <Box bg="accent.normal" color="white">
      {sizeType}
    </Box>
  );
};
