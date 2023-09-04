import React, {useState} from 'react'
import {Keyboard, Text, View} from 'react-native'
import styles from '../styles'
import {Header} from '@/components/Header'
import User from '@/assets/icons/user.svg'
import {CustomInput} from '@/components/CustomInput'
import {useTranslation} from 'react-i18next'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Button} from '@/components/Button'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {useNavigation} from '@react-navigation/native'
import {observer} from 'mobx-react-lite'
import {useMst} from '@/store/RootStore'

export const InputNameScreen: React.FC<{}> = observer(({}) => {
  const [errorMessage, setErrorMessage] = useState('')
  const {t} = useTranslation()
  const navigation = useNavigation()
  const {user} = useMst()
  const onPressNext = (): void => {
    Keyboard.dismiss()
    if (user.firstName.length === 0) {
      const msg = t('common:requiredField')
      setErrorMessage(msg)
    } else {
      navigation.navigate('InputAddressScreen')
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
                Icon={User}
                placeholder={t('common:yourName')}
                autoCapitalize={'none'}
                containerStyles={{flexDirection: 'row', marginTop: 20}}
                onChangeText={user.setFirstName}
                value={user.firstName}
                hasError={user.firstName.length === 0}
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
