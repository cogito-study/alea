import React, { HTMLProps, ReactNode } from 'react';
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
import { Flex } from '../flex/flex';
import { Icon } from '../icon/icon';
import { Paragraph } from '../paragraph/paragraph';

const defaultStyle = ({
  theme: {
    colors: { primary },
  },
}: ButtonProps) => css`
  border-width: 2px;
  border-style: solid;
  border-color: ${theme.colors.transparent};
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  font-weight: 600;
  color: ${primary[8]};

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
    colors: { accent, neutral, transparent },
  },
}: ButtonProps) => css`
  background-color: ${accent[5]};

  &:focus {
    border-color: ${accent[8]};
  }

  &:active {
    border-color: ${accent[8]};
  }

  &:disabled {
    color: ${neutral[0]};
    border-color: ${transparent};
    background-color: ${neutral[3]};
  }

  &:hover:enabled {
    background-color: ${accent[6]};
  }
`;

const secondaryStyle = ({
  theme: {
    colors: { accent, neutral, transparent, white },
  },
}: ButtonProps) => css`
  background-color: ${transparent};
  border-color: ${accent[5]};

  &:focus {
    border-color: ${accent[6]};
    background-color: ${white};
    border-width: 3px;
  }

  &:disabled {
    color: ${neutral[3]};
    border-color: ${neutral[3]};
    background-color: ${white};
  }

  &:hover:enabled {
    background-color: ${accent[5]};
  }
`;

const tertiaryStyle = ({
  theme: {
    colors: { accent, neutral, transparent, white },
  },
}: ButtonProps) => css`
  background-color: ${transparent};
  color: ${accent[6]};

  &:focus {
    border-color: ${accent[4]};
  }

  &:active {
    border-color: ${accent[4]};
    color: ${accent[6]};
  }

  &:disabled {
    color: ${neutral[3]};
    border-color: ${transparent};
    background-color: ${white};
  }

  &:hover:enabled {
    border-color: ${accent[6]};
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
  loading: boolean;
  icon: ReactNode;
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
export const Button = (props: ButtonProps) =>
  props.icon ? (
    // @ts-ignore
    <StyledButton {...props}>
      <Flex alignItems="center">
        {props.icon}
        <Flex flexGrow={1} justifyContent="center">
          <Paragraph fontWeight="bold" lineHeight="0" pl={3}>
            {props.children}
          </Paragraph>
        </Flex>
      </Flex>
    </StyledButton>
  ) : props.loading ? (
    // @ts-ignore
    <StyledButton {...props} disabled>
      <Flex alignItems="center" justifyContent="space-between">
        <Icon option="loading" width="20px" color="#FFFFFF" />
        Loading
      </Flex>
    </StyledButton>
  ) : (
    // @ts-ignore
    <StyledButton {...props} />
  );

Button.defaultProps = {
  theme,
  variant: 'primary',
  disabled: false,
  fontFamily: 'heading',
  fontSize: 1,
  minWidth: '120px',
  height: '40px',
  px: 3,
  py: 2,
  loading: false,
  icon: '',
};
