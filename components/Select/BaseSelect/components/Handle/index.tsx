import React from 'react'
import {View} from 'react-native'
import {BottomSheetHandleProps} from '@gorhom/bottom-sheet'

import styles from './styles'

export const BaseSelectHandle: React.FC<BottomSheetHandleProps> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.handle} />
    </View>
  )
}
