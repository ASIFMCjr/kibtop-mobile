import React, {useState} from 'react'
import {Keyboard, Text, View} from 'react-native'
import styles from '../styles'
import {Header} from '@/components/Header'
import Email from '@/assets/icons/email.svg'
import {CustomInput} from '@/components/CustomInput'
import {useTranslation} from 'react-i18next'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Button} from '@/components/Button'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {useNavigation} from '@react-navigation/native'
import {useMst} from '@/store/RootStore'
import {observer} from 'mobx-react-lite'

export const InputEmailScreen: React.FC<{}> = observer(({}) => {
  const [errorMessage, setErrorMessage] = useState('')
  const {t} = useTranslation()
  const navigation = useNavigation()
  const {user} = useMst()

  const onPressNext = (): void => {
    Keyboard.dismiss()
    if (user.email.length === 0) {
      const msg = t('common:requiredField')
      setErrorMessage(msg)
    } else if (user.emailError) {
      const msg = t('common:invalidEmail')
      setErrorMessage(msg)
    } else {
      navigation.navigate('InputPasswordScreen')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title="" />
        <Text style={styles.welcomeText}>{t('common:newAccount')}</Text>
        <View style={{marginTop: 40}}>
          <KeyboardAwareScrollView>
            <View style={styles.inputContainer}>
              <CustomInput
                Icon={Email}
                autoCapitalize={'none'}
                placeholder={t('common:yourEmail')}
                containerStyles={{flexDirection: 'row', marginTop: 20}}
                onChangeText={user.setEmail}
                value={user.email}
                hasError={user.emailError}
                errorMessage={errorMessage}
              />
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
      <View style={styles.nextButton}>
        <Button
          onPress={onPressNext}
          title={t('common:next')}
          // containerStyles={{marginTop: 20}}
        />
      </View>
    </SafeAreaView>
  )
})
