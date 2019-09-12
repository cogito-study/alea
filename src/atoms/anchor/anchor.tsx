// @ts-ignore
import { themeGet } from '@styled-system/theme-get';
import styled, { ThemeProps, css } from 'styled-components';
import React, { HTMLProps } from 'react';
import { color, ColorProps, compose, space, SpaceProps, typography, TypographyProps } from 'styled-system';

import { Theme, theme } from '../../theme';

interface Props {
  hoverColor?: string;
}

export type AnchorProps = Props &
  SpaceProps &
  TypographyProps &
  ColorProps &
  ThemeProps<Theme> &
  HTMLProps<HTMLAnchorElement>;

const styledProps = compose(
  color,
  space,
  typography,
);

const defaultStyle = ({
  theme: {
    colors: { accent, neutral },
  },
  color,
  hoverColor,
}: AnchorProps) => css`
  color: ${neutral[3]};
  text-decoration: none;
  cursor: not-allowed;

  :link,
  :visited {
    color: ${({ color }: AnchorProps) => themeGet(`colors.${color}`, accent[6])};
    text-decoration: none;
    cursor: pointer;
  }

  :hover {
    color: ${({ href }: AnchorProps) => (!href ? neutral[3] : themeGet(`colors.${hoverColor}`, accent[8]))};
    text-decoration: none;
  }

  :focus {
    color: ${({ href }: AnchorProps) => (!href ? neutral[3] : themeGet(`colors.${color}`, accent[6]))};
    text-decoration: underline;
    outline: none;
  }

  :active {
    color: ${({ href }: AnchorProps) => (!href ? neutral[3] : themeGet(`colors.${color}`, accent[6]))};
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
  fontFamily: 'heading',
  fontSize: 1,
};
