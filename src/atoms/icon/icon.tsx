// @ts-ignore
import { themeGet } from '@styled-system/theme-get';
import React, { HTMLProps } from 'react';
import styled, { ThemeProps } from 'styled-components';
import { theme, Theme } from '../../theme';
import { EmailSVG } from './email-svg';
import { LoadingSVG } from './loading-svg';
import { Box } from '../box/box';

export type IconOptions = 'email' | 'loading';

export interface Props {
  option?: IconOptions;
  color: string;
}

export type IconProps = Props & ThemeProps<Theme> & HTMLProps<SVGElement>;

export const StyledIcon = styled.svg<IconProps>`
  fill: ${({ color }: IconProps) => themeGet(`colors.${color}`, color)};
`;

export const Icon = ({ option, ...props }: IconProps) => {
  return option === 'email' ? (
    <EmailSVG {...props} />
  ) : option === 'loading' ? (
    <LoadingSVG {...props} />
  ) : (
    <Box>Icon not found</Box>
  );
};

Icon.defaultProps = {
  theme,
  color: 'primary.4',
};
