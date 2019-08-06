import styled from 'styled-components';
import React, { HTMLProps } from 'react';
import { color, ColorProps, compose, space, SpaceProps, typography, TypographyProps } from 'styled-system';
import { fonts } from '../../tokens';

type ParagraphSize = 'large' | 'medium' | 'small';

const fontSizes: Record<ParagraphSize, string> = {
  small: `${fonts.fontSizes[0]}px`,
  medium: `${fonts.fontSizes[1]}px`,
  large: `${fonts.fontSizes[2]}px`,
};

const lineHeights: Record<ParagraphSize, number> = {
  small: fonts.lineHeights[3],
  medium: fonts.lineHeights[2],
  large: fonts.lineHeights[2],
};

interface Props {
  paragraphSize: ParagraphSize;
}

export type ParagraphProps = Props & SpaceProps & TypographyProps & ColorProps & HTMLProps<HTMLParagraphElement>;

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
