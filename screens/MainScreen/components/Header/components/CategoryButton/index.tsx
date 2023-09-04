import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import {SvgProps} from 'react-native-svg'

import styles from './styles'

interface Props {
  title: string
  onPress: () => void
  IconComponent: React.FC<SvgProps>
  singleButton?: boolean
}

export const MainScreenHeaderCategoryButton: React.FC<Props> = ({
  title,
  onPress,
  IconComponent,
  singleButton,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, singleButton && styles.singleButton]}
      onPress={onPress}>
      <IconComponent
        width={36}
        height={36}
        style={[singleButton && {marginBottom: 4, marginTop: 5}]}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
