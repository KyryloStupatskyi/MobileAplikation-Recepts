import React from 'react';
import AppRouter from './src/components/AppRouter';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppRouter />
      <StatusBar barStyle="dark-content" />
    </SafeAreaProvider>
  )
}