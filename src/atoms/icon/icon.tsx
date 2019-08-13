import React from 'react';
import { ReactComponent as EmailOutline } from '../../eva-icons/outline/svg/email-outline.svg';
import { ReactComponent as EmailFill } from '../../eva-icons/fill/svg/email.svg';
import { Color } from 'csstype';
import styled from 'styled-components';

export type IconSize = 'small' | 'medium' | 'large';
export type IconVariant = 'fill' | 'outline';
export interface IconProps {
  variant: IconVariant;
  size: IconSize;
  color: Color;
}

const StyledIcon = styled.svg<IconProps>`
  fill: ${({ color }: IconProps) => color};
  width: 25px;
  height: 25px;
`;

export const EmailIcon = (props: IconProps) => {
  if (props.variant === 'fill') {
    return (
      <StyledIcon {...props}>
        <EmailFill></EmailFill>
      </StyledIcon>
    );
  } else if (props.variant === 'outline') {
    return (
      <StyledIcon {...props}>
        <EmailOutline></EmailOutline>
      </StyledIcon>
    );
  }
};
