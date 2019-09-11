// @ts-ignore
import { themeGet } from '@styled-system/theme-get';
import React, { FunctionComponent, HTMLProps, ReactNode } from 'react';
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
  color: 'primary.4',
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
  color: 'primary.4',
  variant: 'fill',
};

export interface LoadingProps {
  size: string;
}
export const Loading: FunctionComponent<LoadingProps> = ({ size }) => {
  return (
    <svg width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle
        cx="50"
        cy="50"
        fill="none"
        r="40"
        strokeWidth="15"
        stroke="#FFFFFF"
        strokeDasharray="62.83185307179586 62.83185307179586"
        transform="rotate(0 50 50)"
      >
        <animate
          attributeName="r"
          begin="0s"
          dur="2s"
          values={`40;29;40`}
          keyTimes="0;0.45;1"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="2s"
          begin="0s"
          repeatCount="indefinite"
        ></animateTransform>
      </circle>
    </svg>
  );
};
