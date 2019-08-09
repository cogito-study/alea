import React, { HTMLProps } from 'react';
import styled from 'styled-components';
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  FlexProps,
  FlexGrowProps,
  FlexShrinkProps,
  FlexBasisProps,
  OrderProps,
  AlignSelfProps,
  system,
} from 'styled-system';

export type FlexItemProps = FlexProps & FlexGrowProps & FlexShrinkProps & FlexBasisProps & OrderProps & AlignSelfProps;
export type BoxProps = FlexItemProps &
  LayoutProps &
  ColorProps &
  SpaceProps &
  TypographyProps &
  BorderProps &
  BackgroundProps;

const flexitem = system({
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true,
});

const styledBoxProps = compose(
  color,
  flexitem,
  layout,
  space,
  typography,
  border,
  background,
);

const StyledBox = styled.div<BoxProps>`
  ${styledBoxProps}
`;

export const Box = (props: BoxProps) => <StyledBox {...props} />;
