import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ProfileMainScreen from '@/screens/ProfileScreen/MainScreen'
import {DEFAULT_HEADER} from '@/navigation/screenOptions'
import Settings from '@/assets/icons/settings.svg'
import {useTranslation} from 'react-i18next'
import {useNavigation} from '@react-navigation/native'
import {AuthStackNavigator} from '@/navigation/ScreenStacks/AuthStackNavigator'
import {useMst} from '@/store/RootStore'
import {observer} from 'mobx-react-lite'

const ProfileMain = createNativeStackNavigator()
export const ProfileStack = observer(({}) => {
  const {t} = useTranslation()
  const navigation = useNavigation()
  const {
    user: {isAuthenticated},
  } = useMst()
  return (
    <ProfileMain.Navigator
      screenOptions={DEFAULT_HEADER}
      initialRouteName={isAuthenticated ? 'ProfileMain' : 'AuthStack'}>
      {isAuthenticated ? (
        <ProfileMain.Screen
          name="ProfileMain"
          component={ProfileMainScreen}
          options={() => ({
            title: t('screenTitles:profile').toString(),
            headerRight: () => (
              <Settings onPress={() => navigation.navigate('Settings')} />
            ),
          })}
        />
      ) : (
        <ProfileMain.Screen
          name="AuthStack"
          component={AuthStackNavigator}
          options={() => ({
            headerShown: false,
          })}
        />
      )}
    </ProfileMain.Navigator>
  )
})
