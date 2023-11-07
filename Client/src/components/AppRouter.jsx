import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '../../index';
import { HOME_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Stack = createNativeStackNavigator();

export default function AppRouter() {
  const { user } = useContext(Context)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HOME_ROUTE}>
        {user.isAuth && authRoutes.map(({ name, Component, title, headerLeft }) =>
          <Stack.Screen key={name} name={name} component={Component} options={{ title, headerLeft }} />
        )}

        {publicRoutes.map(({ name, Component, title, headerLeft }) =>
          <Stack.Screen key={name} name={name} component={Component} options={{ title, headerLeft }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}