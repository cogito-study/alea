import React from 'react';
import styled from 'styled-components';
import { grid, GridProps as StyledGripProps } from 'styled-system';
import { Box, BoxProps } from '../box/box';

export type GridProps = StyledGripProps & BoxProps;

const StyledGrid = styled(Box)<GridProps>`
  display: grid;
  ${grid}
`;

// @ts-ignore
export const Grid = (props: GridProps) => <StyledGrid {...props} />;
