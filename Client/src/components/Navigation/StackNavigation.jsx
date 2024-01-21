import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { authRoutes, publicRoutes } from '../../routes';
import { ADD_RECEPT_ROUTE, HOME_ROUTE, REGISTRATION_ROUTE, TAB_ROUTE } from '../../utils/consts';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName={HOME_ROUTE}>
      <Stack.Screen name='Tabs' component={TabNavigation} options={{ headerShown: false }} />
      {publicRoutes.map(({ name, Component, title, headerLeft }) =>
        <Stack.Screen key={name} name={name} component={Component} options={{
          title, headerLeft
        }} />
      )}
    </Stack.Navigator>
  )
}
