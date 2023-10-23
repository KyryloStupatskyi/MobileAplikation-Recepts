import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '../../index';

const Stack = createNativeStackNavigator();

export default function AppRouter() {
  const { user } = useContext(Context)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="registration">
        {user.isAuth && authRoutes.map(({ name, Component, title }) =>
          <Stack.Screen key={name} name={name} component={Component} options={{ title }} />
        )}

        {publicRoutes.map(({ name, Component, title }) =>
          <Stack.Screen key={name} name={name} component={Component} options={{ title }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}