import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'

import styles from './styles'

interface Props {
  title: string
  isSelected: boolean
  onPress: () => void
}

export const RadioSelectListItem: React.FC<Props> = ({
  title,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={styles.container}>
        <View style={styles.checkboxOuterContainer}>
          {isSelected && <View style={styles.checkboxInnerContainer} />}
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}
