import React from 'react'
import {Text, View, ViewStyle} from 'react-native'
import {styles} from './styles'

interface ContainerTitleProps {
  title: string
  containerStyles?: ViewStyle
}
export const ContainerTitle = ({
  title,
  containerStyles,
}: ContainerTitleProps) => {
  return (
    <View style={[styles.container, containerStyles]}>
      <Text style={styles.titleStyles}>{title}</Text>
    </View>
  )
}
