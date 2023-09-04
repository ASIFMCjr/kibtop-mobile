import React from 'react'
import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native'

import {Checkbox} from '@/components/Checkbox'

import styles from './styles'

interface Props {
  title: string
  isChecked: boolean
  onPress: () => void
  containerStyles?: StyleProp<ViewStyle>
}

export const CheckboxSelectListItem: React.FC<Props> = ({
  title,
  isChecked,
  onPress,
  containerStyles,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyles]}
      onPress={() => onPress()}>
      <Checkbox isChecked={isChecked} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
