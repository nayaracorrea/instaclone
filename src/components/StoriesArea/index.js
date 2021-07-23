import React from 'react';
import { View, Text } from 'react-native';

import { Container, AvatarBorder, AvatarBackground, Avatar } from './styles';

const StoriesArea = () => {
  return (
    <Container>
      <AvatarBorder>
        <AvatarBackground>
          <Avatar source={require('../../assets/LargeAvatar.png')} />
        </AvatarBackground>
      </AvatarBorder>

    </Container>
  )
}

export default StoriesArea;