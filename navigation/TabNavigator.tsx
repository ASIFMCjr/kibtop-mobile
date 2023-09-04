import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {MainScreen} from '@/screens/MainScreen'

import {TabBarComponent} from './TabBarComponent'
import {TabBarIcon} from './TabBarIcon'
import {HomeStackNavigator} from './ScreenStacks/HomeStackNavigator'

import HomeIconFilled from '@/assets/icons/tabBarHomeIconFilled.svg'
import HomeIconOutlined from '@/assets/icons/tabBarHomeIconOutlined.svg'
import HeartIconFilled from '@/assets/icons/tabBarHeartIconFilled.svg'
import HeartIconOutlined from '@/assets/icons/tabBarHeartIconOutlined.svg'
import ChatIconFilled from '@/assets/icons/tabBarChatIconFilled.svg'
import ChatIconOutlined from '@/assets/icons/tabBarChatIconOutlined.svg'
import ProfileIconFilled from '@/assets/icons/tabBarProfileIconFilled.svg'
import ProfileIconOutlined from '@/assets/icons/tabBarProfileIconOutlined.svg'
import {ProfileStack} from '@/navigation/ScreenStacks/ProfileStack'

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={TabBarComponent}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{
          title: 'Home',
          tabBarIcon: props => (
            <TabBarIcon
              {...props}
              FocusedIcon={HomeIconFilled}
              DefaultIcon={HomeIconOutlined}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FavoritesTab"
        component={MainScreen}
        options={{
          title: 'Favorites',
          tabBarIcon: props => (
            <TabBarIcon
              {...props}
              FocusedIcon={HeartIconFilled}
              DefaultIcon={HeartIconOutlined}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ChatsTab"
        component={MainScreen}
        options={{
          title: 'Chats',
          tabBarIcon: props => (
            <TabBarIcon
              {...props}
              FocusedIcon={ChatIconFilled}
              DefaultIcon={ChatIconOutlined}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          title: 'Profile',
          tabBarIcon: props => (
            <TabBarIcon
              {...props}
              FocusedIcon={ProfileIconFilled}
              DefaultIcon={ProfileIconOutlined}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
