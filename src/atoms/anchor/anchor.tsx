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
  color: ${colors.grey.light['2']};
  text-decoration: none;
  cursor: not-allowed;
  :link,
  :visited {
    color: ${colors.accent.normal};
    text-decoration: none;
    cursor: pointer;
  }
  :hover {
    color: ${({ href }: AnchorProps) => (!href ? colors.grey.light['2'] : colors.accent.dark)};
    text-decoration: none;
  }
  :focus {
    color: ${({ href }: AnchorProps) => (!href ? colors.grey.light['2'] : colors.accent.normal)};
    text-decoration: underline;
    outline: none;
  }
  :active {
    color: ${({ href }: AnchorProps) => (!href ? colors.grey.light['2'] : colors.accent.normal)};
    text-decoration: none;
  }
  ${styledProps}
`;

// ts-ignore
export const Anchor = (props: AnchorProps) => <StyledAnchor {...props} />;

Anchor.defaultProps = {
  fontFamily: 'header',
  fontSize: 1,
};
