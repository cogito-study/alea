import styled from 'styled-components';
import React, { HTMLProps } from 'react';
import { color, ColorProps, compose, space, SpaceProps, typography, TypographyProps } from 'styled-system';

export type HeaderProps = SpaceProps & TypographyProps & ColorProps & HTMLProps<HTMLHeadingElement>;

const styledProps = compose(
  color,
  space,
  typography,
);

const StyledHeader = styled.div<HeaderProps>`
  ${styledProps}
`;

// @ts-ignore
export const H1 = (props: HeaderProps) => <StyledHeader as="h1" {...props} />;
// @ts-ignore
export const H2 = (props: HeaderProps) => <StyledHeader as="h2" {...props} />;
// @ts-ignore
export const H3 = (props: HeaderProps) => <StyledHeader as="h3" {...props} />;
// @ts-ignore
export const H4 = (props: HeaderProps) => <StyledHeader as="h4" {...props} />;

const defaultProps = {
  fontFamily: 'header',
  fontWeight: 'bold',
};
H1.defaultProps = { ...defaultProps, fontSize: [5, 7], lineHeight: 0 };
H2.defaultProps = { ...defaultProps, fontSize: [4, 5], lineHeight: 1 };
H3.defaultProps = { ...defaultProps, fontSize: [3, 4], lineHeight: 1, fontWeight: 'semibold' };
H4.defaultProps = { ...defaultProps, fontSize: 3, lineHeight: 1, fontWeight: 'semibold' };
