import React, { createContext } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabNavigation from './src/components/Navigation/TabNavigation';
import Navigation from './src/components/Navigation/Navigation';
import UserStore from './src/store/UserStore';
import ReceptStore from './src/store/ReceptStore';

export const Context = createContext()

export default function App() {
  console.log(Context)
  return (
    <Context.Provider value={{
      user: new UserStore(),
      recept: new ReceptStore()
    }}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar barStyle="dark-content" />
      </SafeAreaProvider>
    </Context.Provider>
  )
}