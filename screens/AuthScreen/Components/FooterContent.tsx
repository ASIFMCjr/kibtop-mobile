import {StyleSheet, Text, View, Alert} from 'react-native'
import Google from '@/assets/icons/google.svg'
import Facebook from '@/assets/icons/facebook.svg'
import React, {useState, useEffect} from 'react'
import {useTranslation} from 'react-i18next'
import {colors} from '@/constants/colors'
import {useNavigation} from '@react-navigation/native'
import {useMst} from '@/store/RootStore'
import {SocialButton} from '@/screens/AuthScreen/Components/SocialButton'
import axios from "axios";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

interface FooterContentProps {
  isLogin: boolean
}

export const FooterContent = ({isLogin}: FooterContentProps) =>{
  
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '871422155316-9nm0epdi3l85gb301j2djr8agnrncgsn.apps.googleusercontent.com',
     });
    isSignedIn()
  }, [])
  
  
  const {t} = useTranslation()
  const navigation = useNavigation()
  const {user} = useMst()
  const onPressAuth = (): void => {
    user.reset()
    navigation.navigate('SignUpStack')
  }

  const BASE_URL = 'https://api.kibtop.com'
  const instance = axios.create({
    baseURL: BASE_URL+'/v1/',
    withCredentials: false,
})

const getUser = async (access: string) => {
  instance.get('auth/users/me/', {
    headers: {
      "Authorization": `Bearer ${access}`,
  }
  })
  .then((data) => {
    console.log(data)
    user.setId(data.data.id)
    user.setEmail(data.data.email)
    user.setFirstName(data.data.first_name)
    user.setPhone(data.data.phone)
    user.setAddress(data.data.addres)
    user.setAvatarUri(data.data.upload_user)
    user.setDeals(data.data.deals)
  })
  .catch(err => {
    console.log(err)
    // Alert.alert('Something get wrong', 'Data is not true, try to sign up', [
    //   {text: 'OK', onPress: () => navigation.navigate('LoginScreen')},
    // ])
    // refreshJWT(user.token.refresh_token)
    navigation.navigate('LoginScreen')
  })
}

  const getTokens = async (auth_token: string) => {
    instance.post('social_auth/google/', {
      'auth_token': auth_token
    })
    .then((data) => {
      user.setToken(data.data.access, data.data.refresh)
      // getUser(data.access)
      // console.log(data.data)
    })
    .catch(err => {
      // console.log(err, ' Cannot refresh token ')
      console.log('token pizda')
    })
  }
  

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (!!isSignedIn) {
      getCurrentUserInfo()
    } else {
      console.log('Please Login')
    }
  };
  const getCurrentUserInfo = async () => {
      try {
        const userInfo = await GoogleSignin.signInSilently();
        // console.log(userInfo);
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_REQUIRED) {
          // alert('User has not signed in yet');
          console.log('User has not signed in yet');
        } else {
          // alert("Something went wrong. Unable to get user's info");
          console.log("Something went wrong. Unable to get user's info");
        }
      }
    };
  const signOut = async () => {
      try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        user.reset()
      } catch (error) {
        console.error(error);
      }
  }
  // signOut()
  const gAuth = async () => {
    // 298715393387-cdpjab9f89q0ajlnvd16o74aav2v1ek1.apps.googleusercontent.com
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo)
      await getTokens(userInfo.idToken)
      await getUser(user.token.access_token)
    } catch (error) {
      console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available or Outdated');
      } else {
        console.log('Some Other Error Happened');
      }
    }
    
  }
  return (
    <View>
      <View style={styles.loginWGoogleFBContainer}>
        <View style={styles.loginWGoogleFB}>
          <View style={styles.line} />
          <Text style={styles.loginWGoogleFBTitle}>
            {t('common:loginWGoogleFB')}
          </Text>
          <View style={styles.line} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <SocialButton title={'Google'} IconName={Google} onPress={gAuth} />
        <SocialButton
          title={'Facebook'}
          IconName={Facebook}
          onPress={() => null}
        />
      </View>
      <View style={styles.noAccountContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.noAccountText}>
            {isLogin ? t('common:haveAccount') : t('common:noAccount')}
          </Text>
          <Text
            onPress={onPressAuth}
            style={[
              styles.noAccountText,
              {color: colors.blue, marginLeft: 10},
            ]}>
            {isLogin ? t('common:login') : t('common:signup')}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loginWGoogleFBContainer: {},
  loginWGoogleFB: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 40,
  },
  loginWGoogleFBTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 10,
  },
  line: {
    width: 40,
    borderBottomWidth: 1.2,
    bottom: 8,
  },
  noAccountContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  noAccountText: {
    fontSize: 16,
    fontWeight: '600',
  },
})
