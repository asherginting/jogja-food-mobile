import React from 'react';
import {View, Text} from 'react-native';

const MainLayout = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>MainLayout</Text>
    </View>
  );
};

export default MainLayout;
