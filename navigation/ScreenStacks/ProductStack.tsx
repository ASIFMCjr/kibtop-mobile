import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {DEFAULT_HEADER} from '@/navigation/screenOptions'
import {useTranslation} from 'react-i18next'
import {Image, Pressable} from 'react-native'
import ProductDetailScreen from '@/screens/ProductDetailScreen'
import commonStyles from '@/styles/commonStyles'
import ProductEditScreen from '@/screens/ProductEdit'
import PromoteAdScreen from '@/screens/ProfileScreen/PromoteAdScreen'
import ArchiveScreen from '@/screens/ArchiveScreen'

const Product = createNativeStackNavigator()
export const ProductDetailStack = ({}) => {
  const {t} = useTranslation()
  return (
    <Product.Navigator screenOptions={DEFAULT_HEADER}>
      <Product.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={props => ({
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          title: '',
          headerLeft: () => (
            <Pressable onPress={props.navigation.goBack} style={{}}>
              <Image
                source={require('@/assets/icons/back.png')}
                style={[commonStyles.iconSize, {width: 40}]}
              />
            </Pressable>
          ),
        })}
      />
      <Product.Screen
        name="PromoteAd"
        component={PromoteAdScreen}
        options={() => ({
          title: t('screenTitles:promoteAd').toString(),
        })}
      />
      <Product.Screen
        name="ProductEdit"
        component={ProductEditScreen}
        options={() => ({
          title: t('screenTitles:editAd').toString(),
        })}
      />
      <Product.Screen
        name="ArchiveScreen"
        component={ArchiveScreen}
        options={() => ({
          title: t('screenTitles:archive').toString(),
        })}
      />
    </Product.Navigator>
  )
}
