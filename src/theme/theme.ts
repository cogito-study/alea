import { colors, fonts, spaces, borders, sizes } from '../tokens';

export const theme = {
  ...borders,
  ...sizes,
  ...colors,
  ...spaces,
  ...fonts,
};

export type Theme = typeof theme;
