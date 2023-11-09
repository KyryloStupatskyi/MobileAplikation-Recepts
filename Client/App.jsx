import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabNavigation from './src/components/Navigation/TabNavigation';
import Navigation from './src/components/Navigation/Navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar barStyle="dark-content" />
    </SafeAreaProvider>
  )
}