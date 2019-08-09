import styled, { css, ThemeProps } from 'styled-components';
import React, { HTMLProps } from 'react';
import { color, ColorProps, compose, space, SpaceProps, typography, TypographyProps } from 'styled-system';

import { Theme, theme } from '../../theme';
import { StyleFunction } from '../../utils/types';

type ParagraphSize = 'large' | 'medium' | 'small';

interface Props {
  paragraphSize: ParagraphSize;
}

export type ParagraphProps = Props &
  SpaceProps &
  TypographyProps &
  ColorProps &
  ThemeProps<Theme> &
  HTMLProps<HTMLParagraphElement>;

const styledProps = compose(
  color,
  space,
  typography,
);

const smallStyle = ({ theme: { fontSizes, lineHeights } }: ParagraphProps) => css`
  font-size: ${`${fontSizes[0]}px`};
  line-height: ${lineHeights[3]};
`;

const mediumStyle = ({ theme: { fontSizes, lineHeights } }: ParagraphProps) => css`
  font-size: ${`${fontSizes[1]}px`};
  line-height: ${lineHeights[2]};
`;

const largeStyle = ({ theme: { fontSizes, lineHeights } }: ParagraphProps) => css`
  font-size: ${`${fontSizes[2]}px`};
  line-height: ${lineHeights[2]};
`;

const styles: Record<ParagraphSize, StyleFunction<ParagraphProps>> = {
  small: smallStyle,
  medium: mediumStyle,
  large: largeStyle,
};

const StyledParagraph = styled.p<ParagraphProps>`
  ${(props: ParagraphProps) => styles[props.paragraphSize](props)};

  ${styledProps}
`;

// @ts-ignore
export const Paragraph = (props: ParagraphProps) => <StyledParagraph {...props} />;

Paragraph.defaultProps = {
  theme: theme,
  fontFamily: 'paragraph',
  paragraphSize: 'medium',
};
