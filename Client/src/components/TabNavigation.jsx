import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { HOME_ROUTE } from "../utils/consts";
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { tabsRoutes } from "../routes";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={HOME_ROUTE}>
        {tabsRoutes.map(({ name, Component, headerShown, icon, color }) =>
          <Tab.Screen key={name} name={name} component={Component} options={{
            headerShown, tabBarIcon: ({ focused }) => (
              <Ionicons name={icon} size={25} color={focused ? '#6EB7FF' : 'black'} />
            ),
          }} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default TabNavigation