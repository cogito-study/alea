import React from 'react';
import styled from 'styled-components';
import { flexbox, FlexboxProps } from 'styled-system';
import { Box, BoxProps } from '../box/box';

export type FlexProps = FlexboxProps & BoxProps;

const StyledFlex = styled(Box)<FlexProps>`
  display: flex;
  ${flexbox}
`;

// @ts-ignore
export const Flex = (props: FlexProps) => <StyledFlex {...props} />;
