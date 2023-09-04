import React, {forwardRef, useMemo} from 'react'
import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet'
import {BaseSelectHandle} from '@/components/Select/BaseSelect/components/Handle'
import {Text, View} from 'react-native'
import {styles} from './styles'
import {Button} from '@/components/Button'
import {useTranslation} from 'react-i18next'

interface ModalProps {
  children: React.ReactNode
  title: string
  customSnapPoints?: string[]
  hasApplyButton?: boolean
}

const Modal = (
  {children, title, customSnapPoints, hasApplyButton = true}: ModalProps,
  ref: React.Ref<BottomSheetModal>,
) => {
  const {t} = useTranslation()
  const snapPoints = useMemo(() => customSnapPoints ?? ['25%'], [])
  const close = () => {
    ref?.current?.close()
  }
  return (
    <BottomSheetModal
      snapPoints={customSnapPoints ?? snapPoints}
      ref={ref}
      backdropComponent={props => (
        <BottomSheetBackdrop
          {...props}
          opacity={0.3}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      )}
      handleComponent={BaseSelectHandle}>
      <View style={styles.contentContainer}>
        <View style={styles.modalHeaderContainer}>
          <Text style={styles.modalHeaderTitle}>{title}</Text>
        </View>
        {children}
        {hasApplyButton && (
          <Button
            containerStyles={styles.btnContainer}
            onPress={close}
            title={t('common:apply')}
          />
        )}
      </View>
    </BottomSheetModal>
  )
}

export const CustomModal = forwardRef(Modal)
