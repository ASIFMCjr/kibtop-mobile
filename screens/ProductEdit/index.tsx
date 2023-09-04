import React from 'react'
import commonStyles from '@/styles/commonStyles'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import {styles} from './styles'
import Camera from '@/assets/icons/camera.svg'
import {Button} from '@/components/Button'
import {useTranslation} from 'react-i18next'
import {ContainerTitle} from '@/screens/Components/ContainerTitle'
import {CustomInput} from '@/components/CustomInput'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Location from '@/assets/icons/location.svg'
import {EUR} from '@/constants/constants'
import {colors} from '@/styles/colors'
import {BORDER_RADIUS_20} from '@/styles/borders'

const ProductEditScreen = () => {
  const {t} = useTranslation()
  const img = undefined
  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{paddingBottom: 140}}>
        <KeyboardAwareScrollView>
          <ContainerTitle
            title={t('common:title')}
            containerStyles={{marginTop: 20}}
          />
          <View style={styles.inputContainer}>
            <CustomInput
              placeholder={t('common:productName')}
              containerStyles={styles.input}
              autoCapitalize={'none'}
              onChangeText={() => null}
              value={null}
            />
          </View>
          <ContainerTitle
            title={t('common:price')}
            containerStyles={{marginTop: 40}}
          />
          <View
            style={[
              commonStyles.row,
              commonStyles.justifyContentBetween,
              commonStyles.alignItemsCenter,
            ]}>
            <CustomInput
              placeholder={t('common:price')}
              containerStyles={[styles.input, {width: '95%'}]}
              autoCapitalize={'none'}
              onChangeText={() => null}
              value={null}
            />
            <Text style={styles.currency}>{EUR}</Text>
          </View>
          <ContainerTitle
            title={t('common:address')}
            containerStyles={{marginTop: 40}}
          />
          <CustomInput
            Icon={Location}
            placeholder={t('common:location')}
            containerStyles={styles.input}
            autoCapitalize={'none'}
            onChangeText={() => null}
            value={null}
          />
          <ContainerTitle
            title={t('common:photo')}
            containerStyles={{marginTop: 40}}
          />
          <View
            style={[
              commonStyles.row,
              commonStyles.alignItemsCenter,
              {flexWrap: 'wrap'},
            ]}>
            {[1, 2, 3, 4].map(index => (
              <PhotoItem key={index} />
            ))}
            <AddPhotoView />
          </View>
          <ContainerTitle
            title={t('common:description')}
            containerStyles={{marginTop: 40}}
          />
          <CustomInput
            placeholder={t('common:description')}
            containerStyles={[
              styles.input,
              {height: 196, paddingHorizontal: 10},
            ]}
            autoCapitalize={'none'}
            onChangeText={() => null}
            multiline
            value={null}
          />
        </KeyboardAwareScrollView>
      </ScrollView>
      <Button
        onPress={() => null}
        title={t('common:apply')}
        containerStyles={{
          marginHorizontal: 0,
          position: 'absolute',
          bottom: 10,
          alignSelf: 'center',
        }}
      />
    </SafeAreaView>
  )
}

export default ProductEditScreen

const PhotoItem = () => {
  return (
    <View
      style={{
        paddingRight: 15,
        paddingBottom: 10,
        borderRadius: BORDER_RADIUS_20,
      }}>
      <Image
        source={{
          uri: 'https://m.media-amazon.com/images/I/61zne3JPlQS._SX466_.jpg',
        }}
        style={{width: 108, height: 108}}
      />
    </View>
  )
}

const AddPhotoView = ({onPress}: {onPress?: () => void}) => {
  const {t} = useTranslation()
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 108,
        height: 108,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 98,
          height: 98,
          backgroundColor: colors.brightGray,
          borderRadius: BORDER_RADIUS_20,
        }}>
        <Camera width={40} height={40} />
      </View>
      <Text
        style={{
          color: colors.blue,
          fontSize: 16,
          fontWeight: '700',
          marginTop: 5,
        }}>
        {t('common:addPhoto')}
      </Text>
    </TouchableOpacity>
  )
}
