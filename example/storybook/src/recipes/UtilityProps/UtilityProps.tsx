import React from 'react';
import { View, Text } from 'react-native';
import { styled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';
const StyledUtilityProps = styled(
  View,
  {
    w: '$40',
    h: '$40',
    bg: '$primary600',

    _text: {
      color: '$white',
    },
  },
  { descendantStyle: ['_text'] }
);

const StyledText = styled(
  Text,
  {},
  {
    ancestorStyle: ['_text'],
  }
);

export function UtilityProps() {
  return (
    <Wrapper>
      {/* @ts-ignore */}
      <StyledUtilityProps justifyContent="center" alignItems="center">
        <StyledText>Utility Props Example</StyledText>
      </StyledUtilityProps>
    </Wrapper>
  );
}