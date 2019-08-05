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

import { colors } from '../../tokens';
import { CSSStateSelector } from '../../utils/types';

const backgroundColors: ButtonVariants = {
  primary: colors.secondary,
  secondary: colors.white,
  tertiary: colors.white,
};

const textColors: ButtonVariants = {
  primary: colors.white,
  secondary: colors.secondary,
  tertiary: colors.secondary,
};

const borders: Record<CSSStateSelector, ButtonVariants> = {
  default: {
    primary: 'none',
    secondary: `2px solid ${colors.secondary}`,
    tertiary: '2px solid transparent',
  },
  hover: {
    secondary: `2px solid ${colors.secondaryDark}`,
    tertiary: `2px solid ${colors.secondaryLight}`,
  },
  active: {
    primary: `2px solid ${colors.secondary}`,
    secondary: `3px solid ${colors.secondaryDark}`,
    tertiary: `2px solid ${colors.secondaryLight}`,
  },
  focus: {
    primary: `2px solid ${colors.secondaryDark}`,
    secondary: `3px solid ${colors.secondary}`,
    tertiary: `2px solid ${colors.secondaryLight}`,
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

  &:hover {
    border: ${({ variant }: ButtonProps) => borders['hover'][variant]};
    background-color: ${({ variant }: ButtonProps) => variant === 'primary' && colors.secondaryDark};
  }

  &:active {
    border: ${({ variant }: ButtonProps) => borders['active'][variant]};
  }

  &:focus {
    border: ${({ variant }: ButtonProps) => borders['focus'][variant]};
  }

  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  ${styledProps}
`;

// ts-ignore to fix type inconsistency because of color
// @ts-ignore
export const Button = (props: ButtonProps) => <StyledButton {...props} />;

Button.defaultProps = {
  variant: 'primary',
  isEnabled: true,
  minWidth: '130px',
  height: '40px',
  px: 3,
  py: 2,
};
