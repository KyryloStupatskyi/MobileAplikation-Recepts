import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { authRoutes, publicRoutes } from '../../routes';
import { Context } from '../../../index';
import { HOME_ROUTE, REGISTRATION_ROUTE, TAB_ROUTE } from '../../utils/consts';
import TabNavigation from './TabNavigation';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  const { user } = useContext(Context)
  return (
    <Stack.Navigator initialRouteName={HOME_ROUTE}>
      <Stack.Screen name='Tabs' component={TabNavigation} options={{ headerShown: false }} />
      {user.isAuth && authRoutes.map(({ name, Component, title, headerLeft, likeImg }) =>
        <Stack.Screen key={name} name={name} component={Component} options={{
          title, headerLeft
        }} />
      )}

      {publicRoutes.map(({ name, Component, title, headerLeft }) =>
        <Stack.Screen key={name} name={name} component={Component} options={{
          title, headerLeft
        }} />
      )}
    </Stack.Navigator>
  )
}