import React from 'react';
import { StatusBar } from 'react-native'
// import { StatusBar } from 'expo-status-bar'

import { Routes } from './src/routes/routes'

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='#fff' />
      <Routes />
      {/* <BottomRoutes /> */}
    </>
  )
}

export default App