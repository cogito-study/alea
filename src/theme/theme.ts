import { colors, fonts, spaces, borders } from '../tokens';

export const theme = {
  ...borders,
  ...colors,
  ...spaces,
  ...fonts,
};

export type Theme = typeof theme;
