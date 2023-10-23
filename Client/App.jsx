import React from 'react';
import { StatusBar } from 'react-native';
import AppRouter from './src/components/AppRouter';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppRouter />
      <StatusBar barStyle="dark-content" />
    </SafeAreaProvider>
  )
}