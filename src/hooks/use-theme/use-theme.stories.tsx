import React from 'react';
import { Box } from '../../atoms';
import { hook } from '../../utils/structure';
import { useTheme } from './use-theme';
/* eslint react-hooks/rules-of-hooks: 0 */

export default { title: hook('useTheme') };

export const theme = () => {
  const theme = useTheme();

  return (
    <Box bg="accent.normal" color="white">
      {JSON.stringify(theme)}
    </Box>
  );
};
