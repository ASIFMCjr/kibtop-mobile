import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'

import styles from './styles'

interface Props {
  title: string
}

export const CategoriesListScreenHeader: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} />
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}
