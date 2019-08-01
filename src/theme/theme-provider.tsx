import React, { FC } from 'react';
import { ThemeProvider as StyledThemeProvider, ThemeProviderProps } from 'styled-components';
import { theme } from './';

export const ThemeProvider: FC<ThemeProviderProps<typeof theme>> = ({ children }) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
