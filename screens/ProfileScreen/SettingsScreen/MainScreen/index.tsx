import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Text, TextStyle, TouchableOpacity, View} from 'react-native'
import commonStyles from '@/styles/commonStyles'
import {styles} from '@/screens/ProfileScreen/SettingsScreen/MainScreen/styles'
import {useTranslation} from 'react-i18next'
import {Divider} from '@/components/Divider'
import {useNavigation} from '@react-navigation/native'
import Kibtop from '@/assets/icons/kibtop.svg'
import {colors} from '@/styles/colors'
import {useMst} from '@/store/RootStore'

interface SettingsButtonProps {
  title: string
  onPress: () => void
  labelStyles?: TextStyle
  hasDivider?: boolean
}

const SettingsMainScreen = () => {
  const {t} = useTranslation()
  const navigation = useNavigation()
  const {user} = useMst()

  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName)
  }
  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={styles.container}>
        <SettingsButton
          title={t('screenTitles:languageCurrency')}
          onPress={() => navigateToScreen('Language')}
        />
        <SettingsButton
          title={t('screenTitles:notifications')}
          onPress={() => navigateToScreen('Notification')}
        />
        <SettingsButton title={t('screenTitles:service')} />
        <SettingsButton
          title={t('screenTitles:contact')}
          onPress={() => navigateToScreen('Contact')}
        />
        <SettingsButton
          title={t('screenTitles:deleteAccount')}
          labelStyles={styles.deleteAccountLabelStyle}
          hasDivider={false}
          onPress={() => {
            user.reset()
            console.log(user)
          }}
        />
      </View>
      <View style={{alignSelf: 'center', paddingBottom: 40}}>
        <Kibtop />
        <Text style={{textAlign: 'center', color: colors.grayText}}>
          ©{new Date().getFullYear()}
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default SettingsMainScreen

const SettingsButton = ({
  title,
  onPress,
  labelStyles,
  hasDivider = true,
}: SettingsButtonProps) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.labelStyle, labelStyles]}>{title}</Text>
      </TouchableOpacity>
      {hasDivider && <Divider containerStyles={styles.dividerStyles} />}
    </>
  )
}
