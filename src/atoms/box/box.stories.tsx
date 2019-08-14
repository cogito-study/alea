import React from 'react';
import { atom } from '../../utils/structure';
import { Box } from './box';
import { colors } from '../../tokens/color';

export default { title: atom('Box') };

export const colored = () => <Box height="100px" width="100px" backgroundColor="primary.normal" />;
export const bordered = () => <Box height="100px" width="100px" border={`2px solid ${colors.colors.accent.normal}`} />;
export const ordered = () => (
  <div style={{ display: 'flex' }}>
    <Box height="100px" width="100px" order={3} border={`2px solid ${colors.colors.accent.normal}`}>
      1. in DOM order: 3
    </Box>
    <Box height="100px" width="100px" order={1} border={`2px solid ${colors.colors.accent.normal}`}>
      2. in DOM order: 1
    </Box>
    <Box height="100px" width="100px" order={2} border={`2px solid ${colors.colors.accent.normal}`}>
      3. in DOM order: 2
    </Box>
  </div>
);
export const grow = () => (
  <div style={{ display: 'flex' }}>
    <Box height="100px" flexGrow={3} border={`2px solid ${colors.colors.accent.normal}`}>
      flex-grow: 3
    </Box>
    <Box height="100px" flexGrow={2} border={`2px solid ${colors.colors.accent.normal}`}>
      flex-grow: 2
    </Box>
    <Box height="100px" flexGrow={1} border={`2px solid ${colors.colors.accent.normal}`}>
      flex-grow: 1
    </Box>
  </div>
);
//TODO more examples
