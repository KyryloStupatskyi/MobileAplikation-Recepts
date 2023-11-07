import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { HOME_ROUTE } from "../utils/consts";
import { NavigationContainer } from "@react-navigation/native";
import { tabsRoutes } from "../routes";

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={HOME_ROUTE}>
        {tabsRoutes.map(({ name, Component, headerShown }) =>
          <Tab.Screen key={name} name={name} component={Component} options={{ headerShown }} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default TabNavigation