import { color, ColorProps, layout, LayoutProps, space, SpaceProps } from 'styled-system';
import styled from 'styled-components';

export type BoxProps = LayoutProps & ColorProps & SpaceProps;

export const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  ${layout}
  ${color}
  ${space}
`;
