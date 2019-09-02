import React from 'react';
import { Box } from '../../atoms';
import { hook } from '../../utils/structure';
import { useMinimumScreenSize, useScreenSizeType } from './use-screen';
/* eslint react-hooks/rules-of-hooks: 0 */

export default { title: hook('useScreen') };

export const minimumSmallScreen = () => {
  const isMinimumSmall = useMinimumScreenSize('s');

  return (
    <Box bg="accent.normal" color="white">
      {isMinimumSmall ? 'minimum small' : 'less than small'}
    </Box>
  );
};

export const minimumMediumScreen = () => {
  const isMinimumMedium = useMinimumScreenSize('m');

  return (
    <Box bg="accent.normal" color="white">
      {isMinimumMedium ? 'minimum medium' : 'less than medium'}
    </Box>
  );
};

export const minimumLargeScreen = () => {
  const isMinimumLarge = useMinimumScreenSize('l');

  return (
    <Box bg="accent.normal" color="white">
      {isMinimumLarge ? 'minimum large' : 'less than large'}
    </Box>
  );
};

export const minimumExtraLargeScreen = () => {
  const isMinimumExtraLarge = useMinimumScreenSize('xl');

  return (
    <Box bg="accent.normal" color="white">
      {isMinimumExtraLarge ? 'minimum extra large' : 'less than extra large'}
    </Box>
  );
};

export const screenSizeType = () => {
  const sizeType = useScreenSizeType();

  return (
    <Box bg="accent.normal" color="white">
      {sizeType}
    </Box>
  );
};
