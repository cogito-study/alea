// @ts-ignore
import { themeGet } from '@styled-system/theme-get';
import React, { HTMLProps, ReactNode } from 'react';
import styled, { ThemeProps } from 'styled-components';
import { color, ColorProps, compose, layout, LayoutProps, size, SizeProps } from 'styled-system';
import { ReactComponent as EmailOutline } from '../../assets/icons/email-outline.svg';
import { ReactComponent as EmailFill } from '../../assets/icons/email.svg';
import { theme, Theme } from '../../theme';

export type IconVariant = 'fill' | 'outline';
export interface Props {
  variant: IconVariant;
}

export type IconProps = Props & ThemeProps<Theme> & ColorProps & LayoutProps & SizeProps & HTMLProps<SVGElement>;

interface Icons {
  filledIcon: ReactNode;
  outlinedIcon: ReactNode;
}
type IconPropsWithIcons = IconProps & Icons;

const styledProps = compose(
  color,
  layout,
  size,
);

const StyledIcon = styled.svg<IconProps>`
  fill: ${({ color }: IconProps) => themeGet(`colors.${color}`, color)};
  ${styledProps};
`;

const Icon = ({ filledIcon, outlinedIcon, ...props }: IconPropsWithIcons) => {
  // @ts-ignore
  return <StyledIcon {...props}>{props.variant === 'fill' ? filledIcon : outlinedIcon}</StyledIcon>;
};

Icon.defaultProps = {
  theme,
  size: 'iconSmall',
  color: 'primary.normal',
  variant: 'fill',
};

export const EmailIcon = (props: IconProps) => {
  return <Icon {...props} filledIcon={<EmailFill />} outlinedIcon={<EmailOutline />} />;
};
