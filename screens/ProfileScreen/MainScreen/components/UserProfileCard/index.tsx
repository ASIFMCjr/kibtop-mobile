import React from 'react'
import {Image, Pressable, Text, View} from 'react-native'
import {styles} from './styles'
import Handshake from '@/assets/icons/handshake.svg'
import Marker from '@/assets/icons/marker.svg'
import commonStyles from '@/styles/commonStyles'
import {useTranslation} from 'react-i18next'
import {useNavigation} from '@react-navigation/native'
import {useMst} from '@/store/RootStore'
import {EUR, RUB, USD} from '@/constants/constants'
import {observer} from 'mobx-react-lite'

export const UserProfileCard = observer(({}) => {
  const navigation = useNavigation()
  const {t} = useTranslation()
  const {user, app} = useMst()
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        {user.avatarUri ? (
          <Image source={{uri: user.avatarUri}} style={styles.imgPlaceholder} />
        ) : (
          <View style={styles.imgPlaceholder} />
        )}
      </View>
      <View style={[commonStyles.row, commonStyles.alignItemsCenter]}>
        <Pressable style={styles.leftContainer}>
          <Handshake />
          <Text style={styles.smallBtnText}>
            {user.deals || '0'} {t('common:deals')}
          </Text>
        </Pressable>
        <View style={styles.centerContainer}>
          <Text style={styles.title}>
            {user.firstName} {user.lastName}
          </Text>
          <Text style={styles.secondTitle}>{user.phone}</Text>
        </View>
        <Pressable style={styles.rightContainer}>
          <Marker />
          <Text style={styles.smallBtnText}>{user.address}</Text>
        </Pressable>
      </View>
      <Pressable style={styles.localizationContainer}>
        <Text style={styles.localizationLabel}>
          {formatCurrency(app.currency)} | {formatLanguage(app.language)}
        </Text>
      </Pressable>
      <Pressable
        style={styles.editProfileBtn}
        onPress={() => navigation.navigate('EditProfile')}>
        <Text style={styles.editProfileLabel}>
          {t('screenTitles:editProfile')}
        </Text>
      </Pressable>
    </View>
  )
})

const formatLanguage = (appLanguage: string) => {
  switch (appLanguage) {
    case 'en': {
      return 'English'
    }
    case 'ru': {
      return 'Русский'
    }
    case 'tr': {
      return 'Türkçe'
    }
    default: {
      return 'English'
    }
  }
}

const formatCurrency = (currency: string) => {
  switch (currency) {
    case EUR: {
      return 'EUR'
    }
    case RUB: {
      return 'RUB'
    }
    case USD: {
      return 'USD'
    }
    default: {
      return 'USD'
    }
  }
}
