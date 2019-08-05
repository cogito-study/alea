import styled from 'styled-components';
import React, { HTMLProps } from 'react';
import { color, ColorProps, compose, space, SpaceProps, typography, TypographyProps } from 'styled-system';

const fontSizes = {
  small: 0,
  medium: 1,
  large: 2,
};

const lineHeights = {
  small: 1,
  medium: 2,
  large: 2,
};

interface ParagraphType {
  paragraphSize: 'large' | 'medium' | 'small';
}

export type ParagraphProps = ParagraphType &
  SpaceProps &
  TypographyProps &
  ColorProps &
  HTMLProps<HTMLParagraphElement>;

const styledProps = compose(
  color,
  space,
  typography,
);

const StyledParagraph = styled.p<ParagraphProps>`
  font-size: ${({ paragraphSize }: ParagraphProps) => fontSizes[paragraphSize]};
  line-height: ${({ paragraphSize }: ParagraphProps) => lineHeights[paragraphSize]};

  ${styledProps}
`;

// @ts-ignore
export const Paragraph = (props: ParagraphProps) => <StyledParagraph {...props} />;

Paragraph.defaultProps = {
  fontFamily: 'Nunito Sans',
  fontStyle: 'normal',
  fontWeight: 'normal',
  paragraphSize: 'medium',
};
