import React, {useLayoutEffect, useRef, useState, useEffect} from 'react'
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  FlatList
} from 'react-native'
import {styles} from './styles'
import {useTranslation} from 'react-i18next'
import {colors} from '@/styles/colors'
import CustomCarousel from '@/components/CustomCarousel'
import {ContainerTitle} from '@/screens/Components/ContainerTitle'
import {EUR} from '@/constants/constants'
import commonStyles from '@/styles/commonStyles'
import {Divider} from '@/components/Divider'
import LocationBlack from '@/assets/icons/locationBlack.svg'
import {Button} from '@/components/Button'
import CustomChart from '@/components/CustomChart'
import GradientButton from '@/screens/ProfileScreen/Components/GradientButton'
import {CustomModal} from '@/components/Modal'
import HeaderArrowLeftIcon from '@/assets/icons/headerArrowLeftIcon.svg'
import { ProductItem } from '@/components/ProductItem'
import axios from 'axios'
import {BASE_URL} from '@/config'
import { color } from 'react-native-reanimated'


export const ProductDetailScreen: React.FC<Props> = ({route, navigation}) => {
  const [data, setData] = useState([]);
  const {t} = useTranslation()
  const modalRef = useRef(null)
  const {key, id} = route.params;
  console.log(route);
    
    useEffect(() => {
      axios
      .get('http://api.kibtop.com/v1/'+ key + '/'+ id)
      .then(({ data }) => {
        console.log(data)
        console.log(data.title_en)
        setData(data)
      })
      .catch((err) => {
        console.log(err);
        alert(err)
      })
    }, []);


    
  // useLayoutEffect(() => {
  //   if (Platform.OS === 'android') {
  //     StatusBar.setBackgroundColor(colors.transparent)
  //     StatusBar.setTranslucent(true)
  //   }
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <Pressable onPress={modalRef?.current?.present} style={styles.trashBtn}>
  //         <Image
  //           source={require('@/assets/icons/trash.png')}
  //           style={commonStyles.iconSize}
  //         />
  //       </Pressable>
  //     ),
  //   })
  // }, [])
  
  return (
    <>
     <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContentContainer}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.goBack()}>
        <HeaderArrowLeftIcon/>
      </TouchableOpacity>


      <ImageBackground style={styles.slider}>     
         <CustomCarousel 
         imageSource={{ uri:data.upload}}/>
      </ImageBackground>

      <View>
      <View style={styles.contentContainer}>
        <View style={[commonStyles.row, commonStyles.justifyContentBetween]}>
          <Text style={styles.productName}>{data.title_en}</Text>
          <Text style={styles.productPrice}>{data.currency}{data.price}</Text>
        </View>
        <Divider />
        <ContainerTitle
          title={t('common:description')}
          containerStyles={styles.containerTitle}
        />
        <Text style={styles.descriptionText}>
          {data.description_en}
        </Text>
        <Divider />
        <View style={styles.addressesContainer}>
          <ContainerTitle
            title={t('common:address')}
            containerStyles={styles.containerTitle}
          />
          <View style={[commonStyles.row, commonStyles.justifyContentBetween]}>
            <View style={styles.addressesContainerLeft}>
              <View style={[commonStyles.row, commonStyles.alignItemsCenter]}>
                <LocationBlack />
                <View style={{marginLeft: 5}}>
                  <Text style={styles.street}>Street</Text>
                  <Text style={styles.city}>City</Text>
                </View>
              </View>
              <Text style={styles.distance}>140 km from you</Text>
            </View>
            <View style={styles.addressesContainerRight}>
              <Image
                source={require('@/assets/icons/map.png')}
                style={{width: 189, height: 120, borderRadius: 10}}
              />
            </View>
          </View>
        </View>
        <Divider />
        <View style={styles.parameterContainer}>
          <ContainerTitle
            title={t('common:parameter')}
            containerStyles={styles.containerTitle}
          />
          <View style={commonStyles.row}>
            <Text style={styles.parameterTitle}>{t('common:category')}:</Text>
            <Text style={styles.parameterValue}>{data.category_en}</Text>
          </View>
          <View style={commonStyles.row}>
            <Text style={styles.parameterTitle}>{t('common:State')}:</Text>
            <Text style={styles.parameterValue}>{data.all_old_new_en}</Text>
          </View>
          <View style={commonStyles.row}>
            <Text style={styles.parameterTitle}>{t('common:goodsType')}:</Text>
            <Text style={styles.parameterValue}>{data.sub_category_en}</Text>
          </View>
        </View>
        <Divider />
        <View style={commonStyles.row}>
          <Text style={styles.parameterTitle}>{t('common:pubDate')}:</Text>
          <Text style={styles.parameterValue}>{data.created_at}</Text>
        </View>
        <View>
          <Button
            title={t('common:editAd')}
            containerStyles={styles.editAdBtn}
            titleStyles={{color: colors.black}}
          />
        </View>
        <View style={styles.analyticsContainer}>
          <CustomChart title={t('common:analytics')} />
          <View style={[commonStyles.row, commonStyles.justifyContentBetween]}>
            <View style={[commonStyles.row]}>
              <Text style={styles.analyticsBottomTitle}>
                {t('common:totalViews')}:
              </Text>
              <Text style={styles.analyticsBottomValue}>19</Text>
            </View>
            <View style={[commonStyles.row]}>
              <Text style={styles.analyticsBottomTitle}>
                {t('common:addedToFav')}:
              </Text>
              <Text style={styles.analyticsBottomValue}>10</Text>
            </View>
          </View>
        </View>
        <GradientButton
          onPress={() => navigation.navigate('PromoteAd')}
          title={t('common:promoteAd')}
          containerStyles={styles.adBtnContainer}
        />
      </View>
      <CustomModal
        title={'Reason for deletion'}
        ref={modalRef}
        hasApplyButton={false}
        customSnapPoints={['35%']}>
        <Text style={[styles.modalItem, {marginTop: 20}]}>Sold on kibtop</Text>
        <Divider containerStyles={styles.divider} />
        <Text style={styles.modalItem}>Sold somewhere else</Text>
        <Divider containerStyles={styles.divider} />
        <Text style={styles.modalItem}>Changed my mind</Text>
      </CustomModal>

</View> 
    </ScrollView> 
    </>
  )
}