import React, { HTMLProps } from 'react';
import styled from 'styled-components';
import {
  AlignSelfProps,
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  FlexBasisProps,
  FlexGrowProps,
  FlexProps,
  FlexShrinkProps,
  gridArea,
  GridAreaProps,
  gridColumn,
  GridColumnProps,
  gridRow,
  GridRowProps,
  layout,
  LayoutProps,
  OrderProps,
  space,
  SpaceProps,
  system,
  typography,
  TypographyProps,
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
  GridAreaProps &
  GridColumnProps &
  GridRowProps &
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
  gridArea,
  gridColumn,
  gridRow,
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

Box.defaultProps = {
  fontFamily: 'paragraph',
};
