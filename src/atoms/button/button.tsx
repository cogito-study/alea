import React, { HTMLProps } from 'react';
import styled from 'styled-components';
import {
  color,
  ColorProps,
  compose,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

import { colors as themeColors } from '../../tokens';
import { CSSStateSelector } from '../../utils/types';

const { colors } = themeColors;

const backgroundColors: ButtonVariants = {
  primary: colors.accent,
  secondary: colors.white,
  tertiary: colors.white,
};

const textColors: ButtonVariants = {
  primary: colors.white,
  secondary: colors.accent,
  tertiary: colors.accent,
};

const borders: Record<CSSStateSelector, ButtonVariants> = {
  default: {
    primary: 'none',
    secondary: `2px solid ${colors.accent}`,
    tertiary: '2px solid transparent',
  },
  hover: {
    secondary: `2px solid ${colors.accentDark}`,
    tertiary: `2px solid ${colors.accentLight}`,
  },
  active: {
    primary: `2px solid ${colors.accent}`,
    secondary: `3px solid ${colors.accentDark}`,
    tertiary: `2px solid ${colors.accentLight}`,
  },
  focus: {
    primary: `2px solid ${colors.accentDark}`,
    secondary: `3px solid ${colors.accent}`,
    tertiary: `2px solid ${colors.accentLight}`,
  },
};

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
type ButtonVariants = Partial<Record<ButtonVariant, string>>;

interface Props {
  variant: ButtonVariant;
  isEnabled: boolean;
}

export type ButtonProps = Props &
  LayoutProps &
  ColorProps &
  SpaceProps &
  TypographyProps &
  HTMLProps<HTMLButtonElement>;

const styledProps = compose(
  layout,
  color,
  space,
  typography,
);

const StyledButton = styled.button<ButtonProps>`
  border: ${({ variant }: ButtonProps) => borders['default'][variant]};
  background-color: ${({ variant }: ButtonProps) => backgroundColors[variant]};
  color: ${({ variant }: ButtonProps) => textColors[variant]};
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;

  &:hover {
    border: ${({ variant }: ButtonProps) => borders['hover'][variant]};
    background-color: ${({ variant }: ButtonProps) => variant === 'primary' && colors.accentDark};
  }

  &:active {
    border: ${({ variant }: ButtonProps) => borders['active'][variant]};
  }

  &:focus {
    border: ${({ variant }: ButtonProps) => borders['focus'][variant]};
  }

  ${styledProps}
`;

// ts-ignore to fix type inconsistency because of color
// @ts-ignore
export const Button = (props: ButtonProps) => <StyledButton {...props} />;

Button.defaultProps = {
  fontFamily: 'header',
  fontSize: 1,
  variant: 'primary',
  isEnabled: true,
  minWidth: '120px',
  height: '40px',
  px: 3,
  py: 2,
};
