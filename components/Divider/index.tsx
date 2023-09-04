import React from 'react'
import {View, ViewStyle} from 'react-native'

import styles from './styles'

interface Props {
  containerStyles?: ViewStyle
}

export const Divider: React.FC<Props> = ({containerStyles}) => {
  return <View style={[styles.divider, containerStyles]} />
}
