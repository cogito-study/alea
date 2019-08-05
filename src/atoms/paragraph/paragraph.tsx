import styled from 'styled-components';
import React, { HTMLProps } from 'react';
import { color, ColorProps, compose, space, SpaceProps, typography, TypographyProps } from 'styled-system';

const fontSizes = {
  small: '10px',
  medium: '16px',
  large: '18px',
};

const lineHeights = {
  small: '120%',
  medium: '160%',
  large: '160%',
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
  paragraphSize: 'medium',
};
