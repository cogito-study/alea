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
  primary: colors.accent.normal,
  secondary: colors.transparent,
  tertiary: colors.transparent,
};

const textColors: ButtonVariants = {
  primary: colors.white,
  secondary: colors.accent.normal,
  tertiary: colors.accent.normal,
};

const borders: Record<CSSStateSelector, ButtonVariants> = {
  default: {
    primary: `2px solid ${colors.transparent}`,
    secondary: `2px solid ${colors.accent.normal}`,
    tertiary: `2px solid ${colors.transparent}`,
  },
  hover: {
    secondary: `2px solid ${colors.accent.dark}`,
    tertiary: `2px solid ${colors.accent.light}`,
  },
  active: {
    primary: `2px solid ${colors.accent.normal}`,
    secondary: `3px solid ${colors.accent.dark}`,
    tertiary: `2px solid ${colors.accent.light}`,
  },
  focus: {
    primary: `2px solid ${colors.accent.dark}`,
    secondary: `3px solid ${colors.accent.normal}`,
    tertiary: `2px solid ${colors.accent.light}`,
  },
};

const disabledProps = {
  backgroundColors: {
    primary: colors.grey.light[2],
    secondary: colors.white,
    tertiary: colors.white,
  },
  textColors: {
    primary: colors.white,
    secondary: colors.grey.light[2],
    tertiary: colors.grey.light[2],
  },
  borders: {
    primary: `2px solid ${colors.transparent}`,
    secondary: `3px solid ${colors.grey.light[2]}`,
    tertiary: `2px solid ${colors.transparent}`,
  },
};

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
type ButtonVariants = Partial<Record<ButtonVariant, string>>;

interface Props {
  variant: ButtonVariant;
  disabled: boolean;
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
  border: ${({ variant, disabled }: ButtonProps) =>
    disabled ? disabledProps.borders[variant] : borders['default'][variant]};
  background-color: ${({ variant, disabled }: ButtonProps) =>
    disabled ? disabledProps.backgroundColors[variant] : backgroundColors[variant]};
  color: ${({ variant, disabled }: ButtonProps) =>
    disabled ? disabledProps.textColors[variant] : textColors[variant]};
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;

  &:hover {
    border: ${({ variant, disabled }: ButtonProps) =>
      disabled ? disabledProps.borders[variant] : borders['hover'][variant]};
    background-color: ${({ variant, disabled }: ButtonProps) =>
      disabled ? disabledProps.backgroundColors[variant] : variant === 'primary' && colors.accent.dark};
    cursor: ${({ disabled }: ButtonProps) => (disabled ? 'not-allowed' : 'pointer')};
  }

  &:focus {
    border: ${({ variant }: ButtonProps) => borders['focus'][variant]};
    outline: none;
  }

  &:active {
    border: ${({ variant }: ButtonProps) => borders['active'][variant]};
  }

  ${styledProps}
`;

// ts-ignore to fix type inconsistency because of color
// @ts-ignore
export const Button = (props: ButtonProps) => <StyledButton {...props} />;

Button.defaultProps = {
  variant: 'primary',
  disabled: false,
  fontFamily: 'header',
  fontSize: 1,
  minWidth: '120px',
  height: '40px',
  px: 3,
  py: 2,
};
