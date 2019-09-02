import { useMedia, useWindowSize } from 'react-use';
import { theme } from '../../theme';
import { breakpointNumbers } from '../../tokens';

export type ScreenSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export const useMinimumScreenSize = (screenSize: ScreenSize): boolean => {
  const { breakpoints } = theme;

  const screenMinWidths: Record<ScreenSize, string> = {
    xs: '0px',
    s: breakpoints[0],
    m: breakpoints[1],
    l: breakpoints[2],
    xl: breakpoints[3],
  };

  return useMedia(`(min-width: ${screenMinWidths[screenSize]})`);
};

export const useScreenSizeType = (): ScreenSize => {
  const { width } = useWindowSize();

  switch (true) {
    case width < breakpointNumbers[0]:
      return 'xs';
    case breakpointNumbers[0] <= width && width < breakpointNumbers[1]:
      return 's';
    case breakpointNumbers[1] <= width && width < breakpointNumbers[2]:
      return 'm';
    case breakpointNumbers[2] <= width && width < breakpointNumbers[3]:
      return 'l';
    case breakpointNumbers[3] <= width:
      return 'xl';
  }

  return 'xs';
};
