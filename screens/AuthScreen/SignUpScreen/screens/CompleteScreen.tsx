import React from 'react'
import {Text, View} from 'react-native'
import styles from '../styles'
import {Header} from '@/components/Header'
import Success from '@/assets/icons/success.svg'
import {useTranslation} from 'react-i18next'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Button} from '@/components/Button'
import {useNavigation} from '@react-navigation/native'

export const CompleteScreen: React.FC<{}> = ({}) => {
  const {t} = useTranslation()
  const navigation = useNavigation()

  const onPressNext = (): void => {
    navigation.navigate('AuthStack')
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title="" />
        <Text style={styles.welcomeText}>{t('common:newAccount')}</Text>
        <View style={[styles.iconContainer, {marginTop: 60}]}>
          <Success />
          <Text style={styles.completeRegisterTitle}>
            {/* {t('common:completeRegisterTitle')} */}
            Your account was created!
          </Text>
          <Text style={styles.completeRegisterDesc}>
            {/* {t('common:completeRegisterDescription')} */}
            Check email for activation
          </Text>
        </View>
      </View>
      <View style={styles.nextButton}>
        <Button
          onPress={onPressNext}
          title={t('common:watchAds')}
          // containerStyles={{marginTop: 20}}
        />
        <Button onPress={onPressNext} title={t('common:placeAd')} ghost />
      </View>
    </SafeAreaView>
  )
}
