import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import HeaderArrowLeftIcon from '@/assets/icons/headerArrowLeftIcon.svg'

import styles from './styles'

interface Props {
  title: string
}

export const Header: React.FC<Props> = ({title}) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.goBack()}>
        <HeaderArrowLeftIcon />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}
