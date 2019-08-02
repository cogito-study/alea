import styled from 'styled-components';
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

export type BoxProps = LayoutProps & FlexboxProps & ColorProps & SpaceProps & TypographyProps;
export type BorderedBoxProps = BoxProps & BorderProps;
export type BackgroundBoxProps = BoxProps & BackgroundProps;

const styledBoxProps = compose(
  color,
  flexbox,
  layout,
  space,
  typography,
);

export const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  ${styledBoxProps}
`;

const styledBorderedBoxProps = compose(
  styledBoxProps,
  border,
);

export const BorderedBox = styled(Box)<BorderedBoxProps>`
  ${styledBorderedBoxProps}
`;

const styledBackgroundBoxProps = compose(
  styledBoxProps,
  background,
);

export const BackgroundBox = styled(Box)<BackgroundBoxProps>`
  ${styledBackgroundBoxProps}
`;
