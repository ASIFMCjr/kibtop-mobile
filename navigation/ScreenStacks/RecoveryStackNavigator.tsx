import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {InputEmailRecoveryScreen} from '@/screens/AuthScreen/RecoveryAccountScreen/screens/InputEmail'
import {CompleteRecoveryScreen} from '@/screens/AuthScreen/RecoveryAccountScreen/screens/CompleteScreen'
import {AuthStackNavigator} from '@/navigation/ScreenStacks/AuthStackNavigator'

const RecoveryStack = createNativeStackNavigator()

export const RecoveryStackNavigator: React.FC<{}> = ({}) => {
  return (
    <RecoveryStack.Navigator screenOptions={{headerShown: false}}>
      <RecoveryStack.Screen
        name="InputEmailRecoveryScreen"
        component={InputEmailRecoveryScreen}
      />
      <RecoveryStack.Screen
        name="CompleteRecoveryScreen"
        component={CompleteRecoveryScreen}
      />
      <RecoveryStack.Screen name="AuthStack" component={AuthStackNavigator} />
    </RecoveryStack.Navigator>
  )
}
