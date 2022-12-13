import { styled } from '@gluestack/styled';
import { Svg } from 'react-native-svg';

export default styled(
  Svg,
  {
    baseStyle: {
      style: {
        bg: '$gray.300',
        color: '$green.500',
        h: 50,
        w: 50,
        borderRadius: 10,
        p: 8,
      },
    },
  },
  {}
);