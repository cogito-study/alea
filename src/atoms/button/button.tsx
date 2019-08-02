import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  buttonStyle,
  ButtonStyleProps,
  compose,
} from 'styled-system';
import styled from 'styled-components';

export type ButtonProps = LayoutProps & ButtonStyleProps & ColorProps & SpaceProps;

const styledProps = compose(
  layout,
  color,
  space,
  buttonStyle,
);

export const Button = styled.button<ButtonProps>`
  ${styledProps}
`;
