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
} from 'styled-system';
import { FlexItemProps, flexItemProps } from '../';

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
