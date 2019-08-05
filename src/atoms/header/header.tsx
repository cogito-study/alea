import styled from 'styled-components';
import React, { HTMLProps } from 'react';
import { color, ColorProps, compose, space, SpaceProps, typography, TypographyProps } from 'styled-system';

const fontSizes = {
  h1: '3em',
  h2: '2.25em',
  h3: '1.75em',
  h4: '1.125em',
};

const lineHeights = {
  h1: '1.05em',
  h2: '1.25em',
  h3: '1.25em',
  h4: '1.22222222em',
};

export type HeaderProps = SpaceProps & TypographyProps & ColorProps & HTMLProps<HTMLHeadingElement>;

const styledProps = compose(
  color,
  space,
  typography,
);

const StyledHeader = styled.div<HeaderProps>`
  font-size: ${({ as }: HeaderProps) => fontSizes[as]};
  line-height: ${({ as }: HeaderProps) => lineHeights[as]};

  ${styledProps}
`;

// @ts-ignore
export const H1 = (props: HeaderProps) => <StyledHeader as={'h1'} {...props} />;
// @ts-ignore
export const H2 = (props: HeaderProps) => <StyledHeader as={'h2'} {...props} />;
// @ts-ignore
export const H3 = (props: HeaderProps) => <StyledHeader as={'h3'} {...props} />;
// @ts-ignore
export const H4 = (props: HeaderProps) => <StyledHeader as={'h4'} {...props} />;

const defaultProps = {};
H1.defaultProps = defaultProps;
H2.defaultProps = defaultProps;
H3.defaultProps = defaultProps;
H4.defaultProps = defaultProps;
