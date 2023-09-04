import React, {useState} from 'react'
import {Text, TouchableOpacity, View, Alert} from 'react-native'
import styles from './styles'
import {Header} from '@/components/Header'
import WelcomeText from '@/assets/icons/welcomeText.svg'
import Email from '@/assets/icons/email.svg'
import Lock from '@/assets/icons/lock.svg'
import Eye from '@/assets/icons/eye.svg'
import EyeClosed from '@/assets/icons/eyeClosed.svg'
import {CustomInput} from '@/components/CustomInput'
import {useTranslation} from 'react-i18next'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Button} from '@/components/Button'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {useNavigation} from '@react-navigation/native'
import {useMst} from '@/store/RootStore'
import {observer} from 'mobx-react-lite'
import {FooterContent} from '@/screens/AuthScreen/Components/FooterContent'
import axios from "axios";
import jwtDecode from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { acc } from 'react-native-reanimated'

export const LoginScreen: React.FC<{}> = observer(({}) => {
  const {t} = useTranslation()
  const navigation = useNavigation()
  const {user} = useMst()
  const [showPassword, setShowPassword] = useState(false)
  const onPasswordIconPress = (): void => {
    setShowPassword(!showPassword)
  }
  const BASE_URL = 'https://api.kibtop.com'
  const instance = axios.create({
    baseURL: BASE_URL+'/v1/',
    withCredentials: false,
})

  const navigateRecoveryScreen = () => {
    user.reset()
    navigation.navigate('RecoveryStack')
  }

  const createJWT = async (username: string, password: string) => {
    await instance.post('auth/jwt/create/', {
      'username': username.replace('@', '_'),
      'password': password
    }).then(({data}) => {
      user.setToken(data.access, data.refresh)
      // console.log(user.token.access_token)
    }).catch(err => {
      console.log(err)
      // user.reset()
      Alert.alert('Something get wrong', 'Data is not true, try to sign up', [
        
          {text: 'OK', onPress: () => navigation.navigate('LoginScreen')},
        ])
    })
  }

  const refreshJWT = async (token: string) => {
    instance.post('auth/jwt/refresh/', {
      'token': token
    })
    .then((data) => {
      user.setToken(data.access, token)
      console.log(data)
    })
    .catch(err => {
      console.log(err, ' Cannot refresh token ')
    })
  }

  setInterval(refreshJWT, 1080000, user.token.refresh_token)

  const getUser = async (access: string) => {
    instance.get('auth/users/me/', {
      headers: {
        "Authorization": `Bearer ${access}`,
    }
    })
    .then((data) => {
      console.log(data.data)
      user.setId(data.data.id)
      user.setEmail(data.data.email)
      user.setFirstName(data.data.first_name)
      user.setPhone(data.data.phone)
      user.setAddress(data.data.addres)
      user.setAvatarUri(data.data.upload_user)
      user.setDeals(data.data.deals)
    })
    .catch(err => {
      Alert.alert('Something get wrong', 'Data is not true, try to sign up', [
        {text: 'OK', onPress: () => navigation.navigate('LoginScreen')},
      ])
      // refreshJWT(user.token.refresh_token)
    })
  }

  const onLogin = async () => {
    await createJWT(user.username, user.password)
    .then(() => {getUser(user.token.access_token)})
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title="" />
        <WelcomeText width={285} height={71} />
        <View style={{marginTop: 40}}>
          <KeyboardAwareScrollView>
            <View style={styles.inputContainer}>
              <CustomInput
                Icon={Email}
                placeholder={t('common:username')}
                containerStyles={{flexDirection: 'row', marginVertical: 20}}
                autoCapitalize={'none'}
                onChangeText={user.setUsername}
                value={user.username}
              />
            </View>
            <View style={styles.inputContainer}>
              <CustomInput
                Icon={Lock}
                RightIcon={showPassword ? Eye : EyeClosed}
                onRightIconPress={onPasswordIconPress}
                placeholder={t('common:password')}
                secureTextEntry={!showPassword}
                onChangeText={user.setPassword}
                value={user.password}
              />
            </View>
            <TouchableOpacity onPress={navigateRecoveryScreen}>
              <Text style={styles.forgotPassword}>
                {t('common:forgotPassword')}
              </Text>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
          <Button
            onPress={onLogin}
            title={t('common:login')}
            containerStyles={{marginTop: 20}}
          />
        </View>
        <FooterContent isLogin={false} />
      </View>
    </SafeAreaView>
  )
})
