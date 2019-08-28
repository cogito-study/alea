// @ts-ignore
import { themeGet } from '@styled-system/theme-get';
import React, { HTMLProps, ReactNode } from 'react';
import styled, { ThemeProps } from 'styled-components';
import { color, ColorProps, compose, layout, LayoutProps, size, SizeProps } from 'styled-system';
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

const EmailFill = () => (
  <g data-name="Layer 2">
    <g data-name="email">
      <rect width="24" height="24" opacity="0" />
      <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm0 2l-6.5 4.47a1 1 0 0 1-1 0L5 6z" />
    </g>
  </g>
);

const EmailOutline = () => (
  <g data-name="Layer 2">
    <g data-name="email">
      <rect width="24" height="24" opacity="0" />
      <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z" />
    </g>
  </g>
);

export const EmailIcon = (props: IconProps) => {
  return <Icon {...props} filledIcon={<EmailFill />} outlinedIcon={<EmailOutline />} />;
};

EmailIcon.defaultProps = {
  theme,
  size: 'iconSmall',
  color: 'primary.normal',
  variant: 'fill',
};
