export const breakpointNumbers = [480, 768, 992, 1200];
const breakpointPixels = [...breakpointNumbers.map((bp) => `${bp}px`)];

export const spaces = {
  space: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128],
  breakpoints: [...breakpointPixels],
};
