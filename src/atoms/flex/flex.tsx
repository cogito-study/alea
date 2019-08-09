import React from 'react';
import styled from 'styled-components';
import {
  compose,
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

const styledFlexProps = compose(flexbox);

const StyledFlex = styled(Box)<FlexContainerProps>`
  display: flex;
  ${styledFlexProps}
`;

// @ts-ignore
export const Flex = (props: FlexContainerProps) => <StyledFlex {...props} />;
