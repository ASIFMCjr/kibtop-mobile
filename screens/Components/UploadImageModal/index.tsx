import {CustomModal} from '@/components/Modal'
import {Text, TouchableOpacity, View} from 'react-native'
import Camera from '@/assets/icons/camera.svg'
import React, {forwardRef} from 'react'
import {useTranslation} from 'react-i18next'
import {BottomSheetModal} from '@gorhom/bottom-sheet'
import uploadImage from '@/utils/uploadImage'
import {useMst} from '@/store/RootStore'

const UploadImageModal = ({}, modalRef: React.Ref<BottomSheetModal>) => {
  const {t} = useTranslation()
  const {user} = useMst()
  const handleUploadImage = async (isCamera: boolean) => {
    try {
      const res = await uploadImage(isCamera)
      res && user.setAvatarUri(res)
      modalRef?.current?.close()
    } catch (e) {}
  }
  return (
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
  )
}

export const UploadPhotoModal = forwardRef(UploadImageModal)
