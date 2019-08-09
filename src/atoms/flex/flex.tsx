import React from 'react';
import styled from 'styled-components';
import { compose, FlexProps, FlexboxProps, flexbox } from 'styled-system';
import { Box, BoxProps } from '../box/box';

export type FlexProps = FlexboxProps & BoxProps;

const styledFlexProps = compose(flexbox);

const StyledFlex = styled(Box)<FlexProps>`
  ${styledFlexProps}
`;

export const Flex = (props: FlexProps) => <StyledFlex {...props} />;
