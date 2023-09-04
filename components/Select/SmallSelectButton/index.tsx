import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import {SvgProps} from 'react-native-svg'

import styles from './styles'

interface Props {
  title: string
  Icon: React.FC<SvgProps>
  onPress: () => void
}

export const SmallSelectButton: React.FC<Props> = ({title, Icon, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon width={15} height={15} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
