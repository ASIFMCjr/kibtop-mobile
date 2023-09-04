import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {DEFAULT_HEADER} from '@/navigation/screenOptions'
import {useTranslation} from 'react-i18next'
import SettingsMainScreen from '@/screens/ProfileScreen/SettingsScreen/MainScreen'
import LanguageScreen from '@/screens/ProfileScreen/SettingsScreen/LanguageScreen'
import NotificationScreen from '@/screens/ProfileScreen/SettingsScreen/NotificationScreen'
import ContactScreen from '@/screens/ProfileScreen/SettingsScreen/ContactScreen'
import {Text, View} from 'react-native'
import Verified from '@/assets/icons/verified.svg'
import KibtopCircle from '@/assets/icons/kibtopCircle.svg'
import {colors} from '@/styles/colors'

const Settings = createNativeStackNavigator()
export const SettingsStack = ({}) => {
  const {t} = useTranslation()
  return (
    <Settings.Navigator screenOptions={DEFAULT_HEADER}>
      <Settings.Screen
        name="Settings"
        component={SettingsMainScreen}
        options={() => ({
          title: t('screenTitles:settings').toString(),
        })}
      />
      <Settings.Screen
        name="Language"
        component={LanguageScreen}
        options={() => ({
          title: t('screenTitles:languageCurrency').toString(),
        })}
      />
      <Settings.Screen
        name="Notification"
        component={NotificationScreen}
        options={() => ({
          title: t('screenTitles:notifications').toString(),
        })}
      />
      <Settings.Screen
        name="Contact"
        component={ContactScreen}
        options={() => ({
          headerTitleAlign: 'center',
          headerTitle: () => (
            <ContactCustomHeader title={t('screenTitles:kibtop').toString()} />
          ),
          headerRight: () => <KibtopCircle />,
        })}
      />
    </Settings.Navigator>
  )
}

const ContactCustomHeader = ({title}: {title: string}) => (
  <View style={{flexDirection: 'row'}}>
    <View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '600',
        }}>
        {title}
      </Text>
      <Text
        style={{
          fontSize: 13,
          fontWeight: '400',
          lineHeight: 15,
          color: colors.grayText,
          textAlign: 'center',
        }}>
        online
      </Text>
    </View>
    <View style={{paddingLeft: 5}}>
      <Verified height={25} />
    </View>
  </View>
)
