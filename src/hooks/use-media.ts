import { useMedia, useWindowSize } from 'react-use';
import { theme } from '../theme';
import { SizeType } from '../utils/types';

export const useSmallScreenSize = (): boolean => useMedia(`(min-width: 0px) and (max-width: ${theme.breakpoints[0]})`);

export const useWindowSizeType = (): SizeType => {
  const { width } = useWindowSize();
  const breakpoints = theme.breakpoints.map((bp) => bp.replace('px', '')).map((bp) => Number(bp));

  switch (true) {
    case width < breakpoints[0]:
      return 'xs';
    case breakpoints[0] <= width && width < breakpoints[1]:
      return 's';
    case breakpoints[1] <= width && width < breakpoints[2]:
      return 'm';
    case breakpoints[2] <= width && width < breakpoints[3]:
      return 'l';
    case breakpoints[3] <= width:
      return 'xl';
  }

  return 'xl';
};
