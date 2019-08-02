import styled from 'styled-components';
import {
  compose,
  textColor,
  TextColorProps,
  textShadow,
  TextShadowProps,
  textStyle,
  TextStyleProps,
  typography,
  TypographyProps,
} from 'styled-system';
import { Box, BoxProps } from '../';

export type TextProps = BoxProps & TypographyProps & TextColorProps & TextShadowProps & TextStyleProps;

const styledProps = compose(
  typography,
  textColor,
  textShadow,
  textStyle,
);

export const Text = styled(Box)<TextProps>`
  ${styledProps}
`;
