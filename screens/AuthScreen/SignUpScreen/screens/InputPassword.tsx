import React, {useState} from 'react'
import {Keyboard, Text, View} from 'react-native'
import styles from '../styles'
import {Header} from '@/components/Header'
import Lock from '@/assets/icons/lock.svg'
import {CustomInput} from '@/components/CustomInput'
import {useTranslation} from 'react-i18next'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Button} from '@/components/Button'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Eye from '@/assets/icons/eye.svg'
import EyeClosed from '@/assets/icons/eyeClosed.svg'
import {useNavigation} from '@react-navigation/native'
import {useMst} from '@/store/RootStore'
import {observer} from 'mobx-react-lite'
import {validatePassword} from '@/utils/validation'

export const InputPasswordScreen: React.FC<{}> = observer(({}) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const {t} = useTranslation()
  const navigation = useNavigation()
  const [showPassword, setShowPassword] = useState(false)
  const onPasswordIconPress = (): void => {
    setShowPassword(!showPassword)
  }
  const {user} = useMst()

  const onPressNext = (): void => {
    Keyboard.dismiss()
    if (user.password.length === 0 || user.password2.length === 0) {
      const msg = t('common:requiredField')
      setErrorMessage(msg)
    } else if (user.passwordError) {
      const msg = t('common:passwordNotMatch')
      setErrorMessage(msg)
    } else if (!validatePassword(user.password, user.firstName)) {
      console.log(validatePassword(user.password, user.firstName))
      setErrorMessage(t('common:passwordValidationText'))
    } else {
      setErrorMessage(null)
      navigation.navigate('InputNameScreen')
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
                Icon={Lock}
                RightIcon={showPassword ? Eye : EyeClosed}
                onRightIconPress={onPasswordIconPress}
                placeholder={t('common:password')}
                value={user.password}
                secureTextEntry={!showPassword}
                onChangeText={user.setPassword}
                hasError={user.passwordError}
                errorMessage={''}
              />
            </View>
            <View style={styles.inputContainer}>
              <CustomInput
                Icon={Lock}
                RightIcon={showPassword ? Eye : EyeClosed}
                onRightIconPress={onPasswordIconPress}
                placeholder={t('common:repeatPassword')}
                value={user.password2}
                secureTextEntry={!showPassword}
                onChangeText={user.setPassword2}
                containerStyles={{marginTop: 15}}
                hasError={user.passwordError}
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
