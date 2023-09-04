import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {CategoryScreen} from '@/screens/CategoryScreen'
import {MainScreen} from '@/screens/MainScreen'

const HomeStack = createNativeStackNavigator()

export const HomeStackNavigator: React.FC<{}> = ({}) => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="MainScreen" component={MainScreen} />
      <HomeStack.Screen name="CategoryScreen" component={CategoryScreen} />
    </HomeStack.Navigator>
  )
}
