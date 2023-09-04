import React, {FC} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {FiltersScreen} from '@/screens/FiltersScreen'
import {CategoriesListScreen} from '@/screens/CategoriesListScreen'
import {TabNavigator} from './TabNavigator'
import {ListSelectListScreen} from '@/screens/ListSelectListScreen'
import {SettingsStack} from '@/navigation/ScreenStacks/SettingsStack'
import EditScreen from '@/screens/ProfileScreen/EditScreen'
import MainScreen from '@/screens/ProfileScreen/EditScreen'
import {useTranslation} from 'react-i18next'
import {DEFAULT_HEADER} from '@/navigation/screenOptions'
import {ProductDetailStack} from '@/navigation/ScreenStacks/ProductStack'
import {AuthStackNavigator} from '@/navigation/ScreenStacks/AuthStackNavigator'
import { AddAdvertsScreen } from '@/screens/AddAdvertsScreen';
import { ProductDetailScreen } from '@/screens/ProductDetailScreen';
import { SearchScreen } from '@/screens/SearchScreen'

import {observer} from 'mobx-react-lite'

export type AppNavigatorParamsList = {
  MainScreen: undefined
  FiltersScreen: undefined
  CategoriesListScreen: {eventName: string}
  ListSelectListScreen: {title: string; data: string[]; eventName: string}
  Settings: undefined
  EditProfile: undefined
  ProductDetailStack: undefined
  AuthStack: undefined
}

const MainStack = createNativeStackNavigator<AppNavigatorParamsList>()

export const AppNavigator: FC = observer(() => {
  const {t} = useTranslation()
  return (
    <MainStack.Navigator screenOptions={DEFAULT_HEADER}>
      <MainStack.Screen
        name="MainScreen"
        component={TabNavigator}
        options={() => ({
          headerShown: false,
        })}
      />
      <MainStack.Screen
        name="FiltersScreen"
        component={FiltersScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <MainStack.Screen
        name="CategoriesListScreen"
        component={CategoriesListScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <MainStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <MainStack.Screen
        name="ListSelectListScreen"
        component={ListSelectListScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <MainStack.Screen
        name="Settings"
        component={SettingsStack}
        options={() => ({
          headerShown: false,
        })}
      />
      <MainStack.Screen
        name="EditProfile"
        component={EditScreen}
        options={() => ({
          title: t('screenTitles:editProfile').toString(),
        })}
      />
      <MainStack.Screen
        name="ProductDetailStack"
        component={ProductDetailStack}
        options={() => ({
          headerShown: false,
        })}
      />
      <MainStack.Screen
        name="AuthStack"
        component={AuthStackNavigator}
        options={() => ({
          headerShown: false,
        })}
      />

<MainStack.Screen
        name="AddAdvertsScreen"
        component={AddAdvertsScreen}
        options={() => ({
          headerShown: false,
        })}
      />

<MainStack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </MainStack.Navigator>
  )
})
