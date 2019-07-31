import { HTMLProps } from 'react';
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  buttonStyle,
  ButtonStyleProps,
} from 'styled-system';
import styled from 'styled-components';

interface Props {
  type?: 'submit' | 'button' | 'reset' | undefined;
}

export type ButtonProps = Props &
  LayoutProps &
  ButtonStyleProps &
  ColorProps &
  SpaceProps &
  HTMLProps<HTMLButtonElement>;

export const Button = styled.button<ButtonProps>`
  ${layout}
  ${color}
  ${space}
  ${buttonStyle}
`;
