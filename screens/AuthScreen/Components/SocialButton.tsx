import {Text, TouchableOpacity, View, ViewStyle} from 'react-native'
import {colors} from '@/constants/colors'
import React from 'react'

interface SocialButtonProps {
  onPress: () => void
  IconName: any
  containerStyles?: ViewStyle
  title: string
}

export const SocialButton = ({
  onPress,
  IconName,
  containerStyles,
  title,
}: SocialButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          borderWidth: 1,
          borderColor: colors.lightGray,
          borderRadius: 5,
          padding: 10,
          width: '48%',
        },
        containerStyles,
      ]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <IconName width={28} height={28} />
        <Text
          style={{
            marginLeft: 30,
            fontSize: 16,
            fontWeight: '600',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
