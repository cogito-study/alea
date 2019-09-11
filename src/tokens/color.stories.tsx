import React from 'react';
import { Box, H3, Flex } from '../atoms';
import { token } from '../utils/structure';
import { theme } from '../theme';

export default { title: token('Color') };

const { colors } = theme;

const cucc = Object.keys(colors)
  .map((name) => {
    return {
      [name]: () => (
        <Flex flexWrap="wrap">
          {colors[name] ? (
            Object.keys(colors[name]).map((colorIndex) => (
              <Box key={colorIndex} mr={5}>
                <H3>
                  {name} {colorIndex}
                </H3>
                <Box backgroundColor={`${name}.${colorIndex}`} width="100px" height="100px" borderRadius="10px" />
              </Box>
            ))
          ) : (
            <Box>
              <H3>{name}</H3>
              <Box backgroundColor={`${name}`} width="100px" height="100px" borderRadius="10px" />
            </Box>
          )}
        </Flex>
      ),
    };
  })
  .reduce((colorComponent, result) => {
    return { ...colorComponent, ...result };
  }, {});

export { cucc };

const primary = () => (
  <Flex flexWrap="wrap">
    {[...Array(9)].map((_, colorIndex) => (
      <Box key={colorIndex + 1} mr={5}>
        <H3>Primary {colorIndex + 1}</H3>
        <Box backgroundColor={`primary.${colorIndex + 1}`} width="100px" height="100px" borderRadius="10px" />
      </Box>
    ))}
  </Flex>
);

const accent = () => (
  <Flex flexWrap="wrap">
    {[...Array(9)].map((_, colorIndex) => (
      <Box key={colorIndex + 1} mr={5}>
        <H3>Accent {colorIndex + 1}</H3>
        <Box backgroundColor={`accent.${colorIndex + 1}`} width="100px" height="100px" borderRadius="10px" />
      </Box>
    ))}
  </Flex>
);

export { accent, primary };
