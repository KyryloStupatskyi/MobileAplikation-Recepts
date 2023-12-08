import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { HOME_ROUTE, PROFILE_ROUTE } from "../../utils/consts";
import { tabsRoutes } from "../../routes";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName={HOME_ROUTE}>
      {tabsRoutes.map(({ name, Component, headerShown, icon, color, likeImg }) =>
        <Tab.Screen key={name} name={name} component={Component} options={{
          headerShown, tabBarIcon: ({ focused }) => (
            <Ionicons name={icon} size={25} color={focused ? '#6EB7FF' : 'black'} />
          )
        }} />
      )}
    </Tab.Navigator>
  )
}
export default TabNavigation