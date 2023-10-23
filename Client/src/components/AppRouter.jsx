import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import { authRoutes, publicRoutes } from '../routes';

const Stack = createNativeStackNavigator();

export default function AppRouter() {
  const isAuth = true
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="profile">
        {/* <Stack.Screen name='home' component={Home} options={{ title: 'Home' }} /> */}
        {isAuth && authRoutes.map(({ name, Component, title }) =>
          <Stack.Screen key={name} name={name} component={Component} options={{ title }} />
        )}

        {publicRoutes.map(({ name, Component, title }) =>
          <Stack.Screen key={name} name={name} component={Component} options={{ title }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}