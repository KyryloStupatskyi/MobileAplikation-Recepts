import React from 'react';
import { StatusBar } from 'react-native';
import AppRouter from './src/components/AppRouter';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabNavigation from './src/components/TabNavigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <TabNavigation />
      <StatusBar barStyle="dark-content" />
    </SafeAreaProvider>
  )
}