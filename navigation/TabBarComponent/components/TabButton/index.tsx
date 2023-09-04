import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

import Icon from '@/assets/icons/tabBarHomeIconOutlined.svg'

import styles from './styles'

interface Props {
  title: string
  isFocused: boolean
  onPress: () => void
  onLongPress: () => void
  icon: any
}

export const TabBarComponentTabButton: React.FC<Props> = ({
  title,
  isFocused,
  onLongPress,
  onPress,
  icon,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      {icon || <Icon />}
      <Text style={[styles.title, isFocused && styles.titleFocused]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
