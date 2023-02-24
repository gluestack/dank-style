import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styled, AsForwarder } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';
import { H2 } from '@expo/html-elements';

const StyledHeading = styled(
  AsForwarder,
  {
    variants: {
      size: {
        xs: {
          color: '$amber600',
        },
        sm: {
          props: {
            size: 16,
          },
        },
        md: {
          props: {
            size: 18,
          },
        },
        lg: {
          props: {
            size: 20,
          },
        },
        xl: {
          props: {
            size: 24,
          },
        },
      },
    },
  },
  {
    ancestorStyle: ['_icon'],
    resolveProps: ['size'],
    DEBUG: 'STYLED_ICON',
  },
  {
    propertyTokenMap: {
      size: 'space',
    },
  }
);

const AsForwarderHeading = ({ ...props }: any) => {
  return <StyledHeading {...props} />;
};

export function AsForwarderExample() {
  const [state, setState] = React.useState(false);
  return (
    <Wrapper>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AsForwarderHeading as={H2} size="xs">
          I am a heading
        </AsForwarderHeading>
        <Pressable
          onPress={() => {
            setState(!state);
          }}
        >
          Press me
        </Pressable>
      </View>
    </Wrapper>
  );
}

export default AsForwarderExample;