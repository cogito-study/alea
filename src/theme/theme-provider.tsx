import React from 'react';
import { ThemeProvider as StyledThemeProvider, ThemeProviderProps } from 'styled-components';
import { theme as defaultTheme } from './theme';

export const ThemeProvider = ({ children, theme = defaultTheme }: ThemeProviderProps<object>) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);

ThemeProvider.defaultProps = {
  theme: { ...defaultTheme },
};
