import React, {useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Text, View, ViewStyle} from 'react-native'
import commonStyles from '@/styles/commonStyles'
import {styles} from './styles'
import {useTranslation} from 'react-i18next'
import CustomToggle from '@/components/CustomToggle'
import {Divider} from '@/components/Divider'

const NotificationScreen = () => {
  const {t} = useTranslation()
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)
  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={styles.container}>
        <ScreenItem
          title={t('common:tipsFromApp')}
          containerStyles={{paddingTop: 20}}
        />
        <ScreenItem title={t('common:chats')} hasDivider={false} />
      </View>
    </SafeAreaView>
  )
}

export default NotificationScreen

interface ScreenItemProps {
  title: string
  isEnabled: boolean
  toggleSwitch: () => void
  hasDivider?: boolean
  containerStyles: ViewStyle
}

const ScreenItem = ({
  title,
  isEnabled,
  toggleSwitch,
  hasDivider = true,
  containerStyles,
}: ScreenItemProps) => {
  return (
    <View style={containerStyles}>
      <View style={styles.itemContainer}>
        <Text style={commonStyles.itemTitle}>{title}</Text>
        <CustomToggle isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
      </View>
      {hasDivider && <Divider />}
    </View>
  )
}
