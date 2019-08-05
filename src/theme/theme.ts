import { Theme } from 'styled-system';
import { colors } from '../tokens/color';

export const theme: Theme = {
  ...colors,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};
