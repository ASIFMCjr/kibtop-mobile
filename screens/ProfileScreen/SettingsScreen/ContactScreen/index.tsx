import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Text, View} from 'react-native'
import commonStyles from '@/styles/commonStyles'
import {styles} from './styles'
import {useTranslation} from 'react-i18next'
import {Divider} from '@/components/Divider'
import Chat from '@/assets/icons/chat.svg'
import Clip from '@/assets/icons/clip.svg'
import {CustomInput} from '@/components/CustomInput'

const ContactScreen = () => {
  const {t} = useTranslation()

  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={styles.container}>
        <Divider />
        <View style={styles.bewareScamContainer}>
          <Text style={[commonStyles.itemTitle]}>
            {t('common:bewareScammers')}
          </Text>
          <Text style={styles.bewareScamText}>
            {t('common:bewareScammersText')}
          </Text>
        </View>
        <View style={styles.chatIconContainer}>
          <Chat />
        </View>
        <View style={styles.askContainer}>
          <Text style={[commonStyles.itemTitle, commonStyles.textCenter]}>
            {t('common:ask')}
          </Text>
          <Text style={[styles.askText]}>{t('common:askText')}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Clip />
        <CustomInput
          placeholder={t('common:writeMsg')}
          containerStyles={{marginLeft: 10}}
        />
      </View>
    </SafeAreaView>
  )
}

export default ContactScreen
