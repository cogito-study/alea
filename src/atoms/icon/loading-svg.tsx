// @ts-ignore
import { themeGet } from '@styled-system/theme-get';
import React, { FunctionComponent } from 'react';
import { IconProps, StyledIcon } from './icon';

export const LoadingSVG: FunctionComponent<IconProps> = (props: IconProps) => {
  return (
    //@ts-ignore
    <StyledIcon {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle
        cx="50"
        cy="50"
        fill="none"
        r="40"
        strokeWidth="15"
        stroke={themeGet(`colors.${props.color}`, props.color)(props)}
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
    </StyledIcon>
  );
};
