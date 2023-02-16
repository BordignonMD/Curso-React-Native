import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
// import Stack from './Stack';
import Tab from './Tab';
// import Drawer from './Drawer';

import {NavigationContainer} from '@react-navigation/native';

export default props => {
  return (
    <SafeAreaView style={ { flex: 1 } }>
      <NavigationContainer>
        {/* <Stack /> */}
        <Tab />
        {/* <Drawer /> */}
      </NavigationContainer>
    </SafeAreaView>
  )
}