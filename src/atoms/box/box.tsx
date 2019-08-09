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
  FlexGrowProps,
  FlexProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  FlexShrinkProps,
  FlexBasisProps,
  OrderProps,
  AlignSelfProps,
  system,
} from 'styled-system';

export type FlexItemProps = FlexProps & FlexGrowProps & FlexShrinkProps & FlexBasisProps & OrderProps & AlignSelfProps;

export const flexItemProps = system({
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true,
});

export type BoxProps = FlexItemProps &
  LayoutProps &
  ColorProps &
  SpaceProps &
  TypographyProps &
  BorderProps &
  BackgroundProps &
  HTMLProps<HTMLDivElement>;

const styledBoxProps = compose(
  color,
  flexItemProps,
  layout,
  space,
  typography,
  border,
  background,
);

const StyledBox = styled.div<BoxProps>`
  ${styledBoxProps}
`;

// @ts-ignore
export const Box = (props: BoxProps) => <StyledBox {...props} />;
