import React, {useLayoutEffect, useEffect, useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Text, TouchableOpacity, View, FlatList} from 'react-native'
import {styles} from '@/screens/ProfileScreen/MainScreen/styles'
import commonStyles from '@/styles/commonStyles'
import {UserProfileCard} from '@/screens/ProfileScreen/MainScreen/components/UserProfileCard'
import {ProductItem} from '@/components/ProductItem'
import {useNavigation} from '@react-navigation/native'
import {useTranslation} from 'react-i18next'
import {useMst} from '@/store/RootStore'
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler'



// const BASE_URL = 'https://api.kibtop.com/'

// const instance = axios.create({
//   // baseURL: BASE_URL+'/v1/',
//   baseURL: BASE_URL+'/v1/',

//   withCredentials: false,
//   headers: {
//       "Accept-Encoding": "*"
//   }
// })

// instance.get('avto/1/')
//   .then(({data}) => {
//       console.log(data)


//   })

const ProfileMainScreen = props => {
  const navigation = useNavigation()
  const {t} = useTranslation()
  //const {user} =  useMst()

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://api.kibtop.com/v1/my_ads/')

    
    .then(({ data }) => {
    console.log(Object.values(data).flat())
    setItems(Object.values(data).flat())
    }).catch((err) => {
      console.log(err);
      alert(err)
    })
  }, []);
  

  // useLayoutEffect(() => {
  //   if (!user.isAuthenticated) {
  //     navigation.navigate('AuthStack')
  //   }
  //   user.me()
  // }, [])

  const navToProductEditScreen = (isEditScreen: boolean) => {
    if (isEditScreen) {
      navigation.navigate('ProductDetailStack', {screen: 'ProductEdit'})
    } else {
      navigation.navigate('ProductDetailStack', {screen: 'ProductDetail'})
    }
  }
  const navToArchiveScreen = () => {
    navigation.navigate('ProductDetailStack', {screen: 'ArchiveScreen'})
  }
  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={styles.container}>
        <UserProfileCard />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{t('common:myAds')}</Text>
          <TouchableOpacity onPress={navToArchiveScreen}>
            <Text style={styles.sndTitle}>{t('common:archive')}</Text>
          </TouchableOpacity>
        </View> 
    


    <FlatList 
    numColumns={2}

    //keyExtractor = {keyExtractor}
    data={items.slice(0,4)}
    renderItem = {({item}) => 
    (
      
    <ProductItem 
      iconSource={require('@/assets/icons/pencil.png')}
        onPressIcon={() => navToProductEditScreen(true)}
        onPress={() => navToProductEditScreen(false)}
        containerStyles={{marginTop: 0}}

        imageSource = {{uri:item.upload}}
        title = {item.title_en}
        subTitle1 = {item.city}
        subTitle2 = {item.created_at}
        price = {item.price}
        /> )
      }
  />

        {/* <ProductItem
          iconSource={require('@/assets/icons/pencil.png')}
          onPressIcon={() => navToProductEditScreen(true)}
          onPress={() => navToProductEditScreen(false)}
          containerStyles={{marginTop: 0}}
        /> */}
      </View>
      
    </SafeAreaView>

  )
}



export default ProfileMainScreen
