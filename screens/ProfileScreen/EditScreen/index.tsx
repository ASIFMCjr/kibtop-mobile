import React, {useLayoutEffect} from 'react'
import commonStyles from '@/styles/commonStyles'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Image, ScrollView, View} from 'react-native'
import {styles} from './styles'
import Camera from '@/assets/icons/camera.svg'
import {Button} from '@/components/Button'
import {useTranslation} from 'react-i18next'
import {ContainerTitle} from '@/screens/Components/ContainerTitle'
import {CustomInput} from '@/components/CustomInput'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {useMst} from '@/store/RootStore'
import {observer} from 'mobx-react-lite'
import {useNavigation} from '@react-navigation/native'
import {BottomSheetModal} from '@gorhom/bottom-sheet'
import {UploadPhotoModal} from '@/screens/Components/UploadImageModal'

const EditScreen = observer(() => {
  const {t} = useTranslation()
  const {user} = useMst()
  const navigation = useNavigation()
  const modalRef = React.createRef<BottomSheetModal>()
  useLayoutEffect(() => {
    user.me()
  }, [])

  const handleApply = async () => {
    await user.update()
    navigation.goBack()
  }
  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView style={styles.container} contentContainerStyle={{flex: 1}}>
        <KeyboardAwareScrollView>
          <ContainerTitle title={t('common:profilePhoto')} />
          <View style={styles.iconContainer}>
            {user.avatarUri ? (
              <Image
                source={{uri: user.avatarUri}}
                style={styles.inputPhotoAvatar}
              />
            ) : (
              <View style={styles.iconStyle}>
                <Camera width={30} height={30} />
              </View>
            )}
            <Button
              onPress={() => modalRef.current?.present()}
              ghost
              fullWidth={false}
              title={t('common:addPhoto')}
            />
          </View>
          <ContainerTitle title={t('common:yourName')} />
          <View style={styles.inputContainer}>
            <CustomInput
              placeholder={t('common:yourName')}
              containerStyles={styles.input}
              autoCapitalize={'none'}
              onChangeText={user.setFirstName}
              value={user.firstName}
            />
          </View>
          <ContainerTitle title={t('common:location')} />
          <CustomInput
            placeholder={t('common:location')}
            containerStyles={styles.input}
            autoCapitalize={'none'}
            onChangeText={user.setAddress}
            value={user.address}
          />
          <ContainerTitle title={t('common:yourEmail')} />
          <CustomInput
            placeholder={t('common:yourEmail')}
            containerStyles={styles.input}
            autoCapitalize={'none'}
            onChangeText={user.setEmail}
            value={user.email}
          />
          <ContainerTitle title={t('common:urPhoneNumber')} />
          <CustomInput
            placeholder={t('common:urPhoneNumber')}
            containerStyles={styles.input}
            autoCapitalize={'none'}
            onChangeText={user.setPhone}
            value={user.phone}
          />
        </KeyboardAwareScrollView>
        <Button
          onPress={handleApply}
          title={t('common:apply')}
          containerStyles={{
            marginHorizontal: 0,
            bottom: 10,
            alignSelf: 'center',
          }}
        />
      </ScrollView>
      <UploadPhotoModal ref={modalRef} />
    </SafeAreaView>
  )
})

export default EditScreen
