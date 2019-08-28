import styled, { ThemeProps, css } from 'styled-components';
import React, { HTMLProps } from 'react';
import { color, ColorProps, compose, space, SpaceProps, typography, TypographyProps } from 'styled-system';

import { Theme, theme } from '../../theme';

export type AnchorProps = SpaceProps & TypographyProps & ColorProps & ThemeProps<Theme> & HTMLProps<HTMLAnchorElement>;

const styledProps = compose(
  color,
  space,
  typography,
);

const defaultStyle = ({
  theme: {
    colors: { accent, grey },
  },
}: AnchorProps) => css`
  color: ${grey.light['2']};
  text-decoration: none;
  cursor: not-allowed;
  :link,
  :visited {
    color: ${accent.normal};
    text-decoration: none;
    cursor: pointer;
  }
  :hover {
    color: ${({ href }: AnchorProps) => (!href ? grey.light['2'] : accent.dark)};
    text-decoration: none;
  }
  :focus {
    color: ${({ href }: AnchorProps) => (!href ? grey.light['2'] : accent.normal)};
    text-decoration: underline;
    outline: none;
  }
  :active {
    color: ${({ href }: AnchorProps) => (!href ? grey.light['2'] : accent.normal)};
    text-decoration: none;
  }
`;

const StyledAnchor = styled.a<AnchorProps>`
  ${defaultStyle}
  ${styledProps}
`;

// @ts-ignore
export const Anchor = (props: AnchorProps) => <StyledAnchor {...props} />;

Anchor.defaultProps = {
  theme: theme,
  fontFamily: 'header',
  fontSize: 1,
};
