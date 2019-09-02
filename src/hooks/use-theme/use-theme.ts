import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Theme } from '../../theme';

export const useTheme = () => useContext<Theme>(ThemeContext);
