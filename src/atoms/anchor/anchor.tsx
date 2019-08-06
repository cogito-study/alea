import styled from 'styled-components';
import React, { HTMLProps } from 'react';
import { color, ColorProps, compose, space, SpaceProps, typography, TypographyProps } from 'styled-system';
import { colors as themeColors } from '../../tokens';

const { colors } = themeColors;

export type AnchorProps = SpaceProps & TypographyProps & ColorProps & HTMLProps<HTMLAnchorElement>;

const styledProps = compose(
  color,
  space,
  typography,
);

const StyledAnchor = styled.a<AnchorProps>`
  color: ${colors.disabled};
  text-decoration: none;
  cursor: not-allowed;
  :link,
  :visited {
    color: ${colors.accent};
    text-decoration: none;
    cursor: pointer;
  }
  :hover {
    color: ${({ href }: AnchorProps) => (!href ? colors.disabled : colors.accentDark)};
    text-decoration: none;
  }
  :active {
    color: ${({ href }: AnchorProps) => (!href ? colors.disabled : colors.accent)};
    text-decoration: none;
  }
  :focus :not(:active) {
    color: ${({ href }: AnchorProps) => (!href ? colors.disabled : colors.accent)};
    text-decoration: underline;
    outline: none;
  }
  ${styledProps}
`;

export const Anchor = (props: AnchorProps) => <StyledAnchor {...props} />;

Anchor.defaultProps = {
  fontFamily: 'header',
  fontSize: 1,
};
