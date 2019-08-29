import styled from 'styled-components';
import React, { HTMLProps } from 'react';
import { color, ColorProps, compose, space, SpaceProps, typography, TypographyProps } from 'styled-system';

export type HeadingProps = SpaceProps & TypographyProps & ColorProps & HTMLProps<HTMLHeadingElement>;

const styledProps = compose(
  color,
  space,
  typography,
);

const StyledHeading = styled.div<HeadingProps>`
  ${styledProps}
`;

// @ts-ignore
export const H1 = (props: HeadingProps) => <StyledHeading as="h1" {...props} />;
// @ts-ignore
export const H2 = (props: HeadingProps) => <StyledHeading as="h2" {...props} />;
// @ts-ignore
export const H3 = (props: HeadingProps) => <StyledHeading as="h3" {...props} />;
// @ts-ignore
export const H4 = (props: HeadingProps) => <StyledHeading as="h4" {...props} />;

const defaultProps = {
  fontFamily: 'heading',
  fontWeight: 'bold',
};
H1.defaultProps = { ...defaultProps, fontSize: [5, 7], lineHeight: 0 };
H2.defaultProps = { ...defaultProps, fontSize: [4, 5], lineHeight: 1 };
H3.defaultProps = { ...defaultProps, fontSize: [3, 4], lineHeight: 1 };
H4.defaultProps = { ...defaultProps, fontSize: [1, 2], lineHeight: 1, fontWeight: 'semibold' };
