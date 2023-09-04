import React from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import styles from '../styles'
import {Header} from '@/components/Header'
import Camera from '@/assets/icons/camera.svg'
import {useTranslation} from 'react-i18next'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Button} from '@/components/Button'
import {useNavigation} from '@react-navigation/native'
import {CustomModal} from '@/components/Modal'
import {BottomSheetModal} from '@gorhom/bottom-sheet'
import uploadImage from '@/utils/uploadImage'
import {useMst} from '@/store/RootStore'
import {observer} from 'mobx-react-lite'

export const InputPhotoScreen: React.FC<{}> = observer(({}) => {
  const {t} = useTranslation()
  const navigation = useNavigation()
  const modalRef = React.createRef<BottomSheetModal>()
  const {user} = useMst()
  const onPressNext = (): void => {
    navigation.navigate('InputAddressScreen')
  }
  const openModal = () => {
    modalRef.current?.present()
  }
  const handleUploadImage = async (isCamera: boolean) => {
    try {
      const res = await uploadImage(isCamera)
      res && user.setAvatarUri(res)
      modalRef.current?.close()
    } catch (e) {}
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title="" />
        <Text style={styles.welcomeText}>{t('common:newAccount')}</Text>
        <View style={styles.iconContainer}>
          {user.avatarUri ? (
            <Image
              source={{uri: user.avatarUri}}
              style={styles.inputPhotoAvatar}
            />
          ) : (
            <View style={styles.iconStyle}>
              <Camera />
            </View>
          )}
          <Button
            onPress={openModal}
            ghost
            containerStyles={styles.addPhotoTitle}
            title={t('common:addPhoto')}
          />
        </View>
      </View>
      <View style={styles.nextButton}>
        <Button
          onPress={onPressNext}
          title={t('common:skip')}
          // containerStyles={{marginTop: 20}}
          ghost
        />
        <Button onPress={onPressNext} title={t('common:next')} />
      </View>
      <CustomModal title={t('common:addPhoto')} ref={modalRef}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '60%',
            justifyContent: 'space-between',
            paddingVertical: 12,
          }}>
          <TouchableOpacity
            onPress={() => handleUploadImage(true)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Camera width={25} />
            <Text style={{marginLeft: 10}}>{t('common:Camera')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleUploadImage(false)}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Camera width={25} />
            <Text style={{marginLeft: 10}}>{t('common:Gallery')}</Text>
          </TouchableOpacity>
        </View>
      </CustomModal>
    </SafeAreaView>
  )
})
