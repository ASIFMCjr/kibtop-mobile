import React from 'react'
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native'

import styles from './styles'

interface Props {
  title: string
  ghost?: boolean
  onPress?: () => void
  fullWidth?: boolean
  containerStyles?: ViewStyle
  titleStyles?: TextStyle
}

export const Button: React.FC<Props> = ({
  title,
  ghost,
  onPress,
  fullWidth = true,
  containerStyles,
  titleStyles,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        ghost && styles.ghostContainer,
        fullWidth && styles.fullWidth,
        containerStyles,
      ]}
      onPress={onPress}>
      <Text style={[styles.title, ghost && styles.ghostTitle, titleStyles]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
