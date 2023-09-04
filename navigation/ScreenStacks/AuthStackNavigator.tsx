import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {LoginScreen} from '@/screens/AuthScreen/LoginScreen'
import {SignUpStackNavigator} from '@/navigation/ScreenStacks/SignUpStackNavigator'
import {RecoveryStackNavigator} from '@/navigation/ScreenStacks/RecoveryStackNavigator'
import {HomeStackNavigator} from '@/navigation/ScreenStacks/HomeStackNavigator'
import ProfileMainScreen from '@/screens/ProfileScreen/MainScreen'

const AuthStack = createNativeStackNavigator()

export const AuthStackNavigator: React.FC<{}> = ({}) => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="SignUpStack" component={SignUpStackNavigator} />
      <AuthStack.Screen
        name="RecoveryStack"
        component={RecoveryStackNavigator}
      />
      <AuthStack.Screen name="ProfileStack" component={ProfileMainScreen} />
      <AuthStack.Screen name="HomeStack" component={HomeStackNavigator} />
    </AuthStack.Navigator>
  )
}
