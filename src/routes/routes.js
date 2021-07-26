import React from 'react';
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Feed from '../pages/Feed/index'
import Search from '../pages/Search/index'
import Reels from '../pages/Reels/index'
import Shop from '../pages/ShopPage/index'
import Profile from '../pages/Profile/index'

const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: (props) => (
          <Image
            source={require('../assets/instagram.png')}
          />
        ),
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 0,
          shadowOpacity: 0
        },

      }}
    >
      <Stack.Screen
        name='Feed'
        component={Feed}
      />
    </Stack.Navigator>
  )
}

export const Routes = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName='Feed'
        tabBarOptions={{
          tabStyle: {
            backgroundColor: '#fff',
          },
          showLabel: false,
        }}
      >
        <BottomTab.Screen
          name="Feed"
          component={HomeStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <Image source={require('../assets/Home.png')} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <Image source={require('../assets/Search.png')} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Reels"
          component={Reels}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <Image source={require('../assets/Reels.png')} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Shop"
          component={Shop}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <Image source={require('../assets/Shop.png')} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <Image source={require('../assets/Avatar.png')} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}


