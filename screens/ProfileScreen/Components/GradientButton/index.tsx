import {Pressable, Text, ViewStyle} from 'react-native'
import React from 'react'
import {styles} from '@/screens/ProfileScreen/Components/GradientButton/styles'
import LinearGradient from 'react-native-linear-gradient'

interface GradientButtonProps {
  title: string
  containerStyles?: ViewStyle
  onPress?: () => void
}
const GradientButton = ({
  title,
  containerStyles,
  onPress,
}: GradientButtonProps) => {
  return (
    <Pressable style={[styles.container, containerStyles]} onPress={onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1.2, y: 0}}
        colors={['#FDDB92', '#D1FDFF']}
        style={styles.linearGradient}>
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </Pressable>
  )
}

export default GradientButton
