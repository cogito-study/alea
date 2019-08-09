import { colors, fonts, spaces } from '../tokens';
export const theme = {
  ...colors,
  ...spaces,
  ...fonts,
};
export type Theme = typeof theme;
