import React from 'react'
import {Text, TouchableOpacity, View, Alert} from 'react-native'
import styles from '../styles'
import {Header} from '@/components/Header'
import Location from '@/assets/icons/location.svg'
import {CustomInput} from '@/components/CustomInput'
import {useTranslation} from 'react-i18next'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Button} from '@/components/Button'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {useNavigation} from '@react-navigation/native'
import {useMst} from '@/store/RootStore'
import axios from "axios";

export const InputAddressScreen: React.FC<{}> = ({}) => {
  const {t} = useTranslation()
  const navigation = useNavigation()
  const {user} = useMst()
  const BASE_URL = 'https://api.kibtop.com'
  const instance = axios.create({
    baseURL: BASE_URL+'/v1/',
    withCredentials: false,
})
  const onPressNext = async (): Promise<void> => {
   
    console.log(user)
    if (user.address != '' || null || undefined) {
      instance.post('auth/users/', {
        "username": user.email.replace('@', '_'),
        "email": user.email,
        "password": user.password,
        "re_password": user.password2,
        "first_name": user.firstName,
        "addres": user.address
      }).then((res) => {
        console.log(res.data)
        if (res.data.username != '' || null || undefined) {
          instance.post('auth/users/resend_activation/', {"email": user.email})
          navigation.navigate('CompleteScreen')
        }
      }).catch(err => {
        console.log(err)
        Alert.alert('Something get wrong', 'Data is invalid, try to sign up again', [
        
          {text: 'OK', onPress: () => navigation.navigate('LoginScreen')},
        ])
      })
    } else {
      Alert.alert('Something get wrong', 'Address cannot be empty', [
        
        {text: 'OK', onPress: () => null},
      ])
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
                Icon={Location}
                placeholder={t('common:addressPlaceholder')}
                containerStyles={{
                  flexDirection: 'row',
                  marginTop: 20,
                  marginBottom: 10,
                }}
                onChangeText={user.setAddress}
              />
            </View>
            <TouchableOpacity>
              <Text style={styles.useLocationBtn}>
                {t('common:useMyLocation')}
              </Text>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
        </View>
      </View>
      <View style={styles.nextButton}>
        {/* <Button
          onPress={onPressNext}
          title={t('common:skip')}
          containerStyles={{marginTop: 20}}
          ghost
        /> */}
        <Button onPress={onPressNext} title={t('common:next')} />
      </View>
    </SafeAreaView>
  )
}
