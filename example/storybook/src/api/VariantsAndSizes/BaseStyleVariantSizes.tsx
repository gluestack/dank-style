import React from 'react';
import { View, Text } from 'react-native';
import { styled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';

const StyledButton = styled(
  View,
  {
    baseStyle: {
      style: {
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        m: 12,
      },
      platform: {
        web: {
          style: {
            //@ts-ignore
            outlineWidth: 0,
          },
        },
      },
    },
    variants: {
      bluebox: {
        style: {
          bg: '$blue400',
        },
      },
    },
    sizes: {
      sm: {
        style: {
          px: '$3',
          py: '$2',
        },
      },
      md: {
        style: {
          px: '$4',
          py: '$3',
        },
      },
    },
    defaultProps: {
      size: 'md',
      variant: 'bluebox',
    },
  },
  {}
);

export function BaseStyleVariantSizes({ ...args }) {
  return (
    <Wrapper>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StyledButton size="sm" {...args}>
          <Text>bluebox - sm</Text>
        </StyledButton>
        <StyledButton>
          <Text>bluebox - md</Text>
        </StyledButton>
      </View>
    </Wrapper>
  );
}