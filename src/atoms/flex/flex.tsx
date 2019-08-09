import React from 'react';
import styled from 'styled-components';
import {
  FlexBasisProps,
  flexbox,
  FlexboxProps,
  FlexGrowProps,
  FlexProps,
  FlexShrinkProps,
  OrderProps,
  system,
  AlignSelfProps,
} from 'styled-system';
import { Box, BoxProps } from '../box/box';

export type FlexContainerProps = FlexboxProps & BoxProps;
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

const StyledFlex = styled(Box)<FlexContainerProps>`
  display: flex;
  ${flexbox}
`;

// @ts-ignore
export const Flex = (props: FlexContainerProps) => <StyledFlex {...props} />;
