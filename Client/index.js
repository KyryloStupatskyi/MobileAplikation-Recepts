import React, { createContext } from 'react';
import App from './App'
import UserStore from './src/store/UserStore';
import ReceptStore from './src/store/ReceptStore';

export const Context = createContext(null)

export default function index() {
  return (
    <Context.Provider value={{
      user: new UserStore(),
      recept: new ReceptStore()
    }}>
      <App />
    </Context.Provider>
  )
}