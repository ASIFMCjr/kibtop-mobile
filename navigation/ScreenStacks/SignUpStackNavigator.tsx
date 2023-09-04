import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {InputEmailScreen} from '@/screens/AuthScreen/SignUpScreen/screens/InputEmail'
import {InputPasswordScreen} from '@/screens/AuthScreen/SignUpScreen/screens/InputPassword'
import {InputNameScreen} from '@/screens/AuthScreen/SignUpScreen/screens/InputName'
import {InputAddressScreen} from '@/screens/AuthScreen/SignUpScreen/screens/InputAddress'
import {CompleteScreen} from '@/screens/AuthScreen/SignUpScreen/screens/CompleteScreen'
import {InputPhotoScreen} from '@/screens/AuthScreen/SignUpScreen/screens/InputPhoto'
import {AuthStackNavigator} from '@/navigation/ScreenStacks/AuthStackNavigator'

const SignUpStack = createNativeStackNavigator()

export const SignUpStackNavigator: React.FC<{}> = ({}) => {
  return (
    <SignUpStack.Navigator screenOptions={{headerShown: false}}>
      <SignUpStack.Screen
        name="InputEmailScreen"
        component={InputEmailScreen}
      />
      <SignUpStack.Screen
        name="InputPasswordScreen"
        component={InputPasswordScreen}
      />
      <SignUpStack.Screen name="InputNameScreen" component={InputNameScreen} />
      <SignUpStack.Screen
        name="InputPhotoScreen"
        component={InputPhotoScreen}
      />
      <SignUpStack.Screen
        name="InputAddressScreen"
        component={InputAddressScreen}
      />
      <SignUpStack.Screen name="CompleteScreen" component={CompleteScreen} />
      <SignUpStack.Screen name="AuthStack" component={AuthStackNavigator} />
    </SignUpStack.Navigator>
  )
}
