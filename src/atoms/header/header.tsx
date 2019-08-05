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

type HeaderType = 'h1' | 'h2' | 'h3' | 'h4';

interface Props {
  as: HeaderType;
}

export type HeaderProps = Props & SpaceProps & TypographyProps & ColorProps & HTMLProps<HTMLHeadingElement>;

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
export const Header = (props: HeaderProps) => <StyledHeader as={props.as} {...props} />;

Header.defaultProps = {};
