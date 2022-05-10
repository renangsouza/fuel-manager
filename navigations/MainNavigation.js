import React from 'react';
import {
  createNativeStackNavigator,
  NavigationContainer,
} from '@react-navigation/native-stack';

import Main from '../screens/Main';
import Refuelling from '../screens/Refuelling';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Main'>
      <Stack.Screen
        name='Main'
        component={Main}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name='Refuelling'
        component={Refuelling}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
