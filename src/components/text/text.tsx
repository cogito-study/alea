import {
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  fontStyle,
  FontStyleProps,
  fontWeight,
  FontWeightProps,
  textAlign,
  TextAlignProps,
  textColor,
  TextColorProps,
  textShadow,
  TextShadowProps,
  textStyle,
  TextStyleProps,
} from 'styled-system';
import styled from 'styled-components';
import { Box, BoxProps } from '../box';

export type TextProps = BoxProps &
  FontFamilyProps &
  FontSizeProps &
  FontStyleProps &
  FontWeightProps &
  TextAlignProps &
  TextColorProps &
  TextShadowProps &
  TextStyleProps;

export const Text = styled(Box)<TextProps>`
  ${fontFamily}
  ${fontSize}
  ${fontStyle}
  ${fontWeight}
  ${textAlign}
  ${textColor}
  ${textShadow}
  ${textAlign}
  ${textStyle}
`;
