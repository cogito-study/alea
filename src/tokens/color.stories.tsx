import React, { Fragment } from 'react';
import { Box, Flex, H2, H4 } from '../atoms';
import { theme } from '../theme';
import { token } from '../utils/structure';

export default { title: token('Color') };

const { colors } = theme;

const allColors = () => (
  <Flex flexWrap="wrap" flexDirection="column">
    {Object.entries(colors).map((color, index) => {
      const [name, colorObject] = color;
      return (
        <Fragment key={index}>
          <H2>{name}</H2>
          <Flex flexWrap="wrap">
            {typeof colorObject !== 'string' ? (
              Object.keys(colorObject).map((colorIndex) => (
                <Box key={colorIndex} mr={5} textAlign="center">
                  <Box backgroundColor={`${name}.${colorIndex}`} width="100px" height="100px" borderRadius="10px" />
                  <H4>{colorIndex}</H4>
                </Box>
              ))
            ) : (
              <Box textAlign="center">
                <Box backgroundColor={name} width="100px" height="100px" borderRadius="10px" />
                <H4>{name}</H4>
              </Box>
            )}
          </Flex>
        </Fragment>
      );
    })}
  </Flex>
);

export { allColors };
