import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

import styles from './styles'

interface Props {
  title: string
  noBorder?: boolean
  onPress: () => void
}

export const SearchSelectListItem: React.FC<Props> = ({
  title,
  noBorder,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, noBorder && styles.noBorder]}
      onPress={() => onPress()}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
