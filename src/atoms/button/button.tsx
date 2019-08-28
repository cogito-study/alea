import React, { HTMLProps } from 'react';
import styled, { css, ThemeProps } from 'styled-components';
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

import { Theme, theme } from '../../theme';
import { StyleFunction } from '../../utils/types';

const defaultStyle = ({ theme }: ButtonProps) => css`
  border-width: 2px;
  border-style: solid;
  border-color: ${theme.colors.transparent};
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const primaryStyle = ({
  theme: {
    colors: { accent, grey, transparent, white },
  },
}: ButtonProps) => css`
  background-color: ${accent.normal};
  color: ${white};

  &:focus {
    border-color: ${accent.dark};
  }

  &:active {
    border-color: ${accent.normal};
  }

  &:disabled {
    color: ${white};
    border-color: ${transparent};
    background-color: ${grey.light[2]};
  }

  &:hover:enabled {
    background-color: ${accent.dark};
  }
`;

const secondaryStyle = ({
  theme: {
    colors: { accent, grey, transparent, white },
  },
}: ButtonProps) => css`
  background-color: ${transparent};
  color: ${accent.normal};
  border-color: ${accent.normal};

  &:focus {
    border-color: ${accent.normal};
    border-width: 3px;
  }

  &:active {
    border-color: ${accent.dark};
    color: ${accent.dark};
  }

  &:disabled {
    color: ${grey.light[2]};
    border-color: ${grey.light[2]};
    background-color: ${white};
  }

  &:hover:enabled {
    border-color: ${accent.dark};
  }
`;

const tertiaryStyle = ({
  theme: {
    colors: { accent, grey, transparent, white },
  },
}: ButtonProps) => css`
  background-color: ${transparent};
  color: ${accent.normal};

  &:focus {
    border-color: ${accent.light};
  }

  &:active {
    border-color: ${accent.light};
    color: ${accent.dark};
  }

  &:disabled {
    color: ${grey.light[2]};
    border-color: ${transparent};
    background-color: ${white};
  }

  &:hover:enabled {
    border-color: ${accent.light};
  }
`;

const variantStyles: Record<ButtonVariant, StyleFunction<ButtonProps>> = {
  primary: primaryStyle,
  secondary: secondaryStyle,
  tertiary: tertiaryStyle,
};

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface Props {
  variant: ButtonVariant;
}

export type ButtonProps = Props &
  LayoutProps &
  ColorProps &
  SpaceProps &
  TypographyProps &
  ThemeProps<Theme> &
  HTMLProps<HTMLButtonElement>;

const styledProps = compose(
  layout,
  color,
  space,
  typography,
);

const StyledButton = styled.button<ButtonProps>`
  ${defaultStyle}
  ${(props: ButtonProps) => variantStyles[props.variant](props)}

  ${styledProps}
`;

// ts-ignore to fix type inconsistency because of color
// @ts-ignore
export const Button = (props: ButtonProps) => <StyledButton {...props} />;

Button.defaultProps = {
  theme,
  variant: 'primary',
  disabled: false,
  fontFamily: 'header',
  fontSize: 1,
  minWidth: '120px',
  height: '40px',
  px: 3,
  py: 2,
};
