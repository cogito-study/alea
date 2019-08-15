const fontStack = (fonts: string[]) => fonts.map((font) => (font.includes(' ') ? `"${font}"` : font)).join(', ');

export const fonts = {
  fonts: {
    header: fontStack(['rawline', 'Helvetica', 'serif']),
    paragraph: fontStack(['Nunito Sans', 'Helvetica', 'serif']),
  },
  fontSizes: [10, 16, 18, 20, 24, 32, 40, 48],
  fontWeights: {
    light: 300,
    normal: 400,
    semibold: 600,
    bold: 700,
  },
  lineHeights: [1.1, 1.2, 1.6],
};
