import React, { FunctionComponent } from 'react';
import { IconProps, StyledIcon } from './icon';

export const EmailSVG: FunctionComponent<IconProps> = (props) => {
  return (
    // @ts-ignore
    <StyledIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm0 2l-6.5 4.47a1 1 0 0 1-1 0L5 6z" />
    </StyledIcon>
  );
};
