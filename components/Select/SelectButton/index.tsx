import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

import SelectArrowDownIcon from '@/assets/icons/selectArrowDownIcon.svg'

import styles from './styles'

interface Props {
  title: string
  onPress: () => void
  halfWidth?: boolean
}

export const SelectButton: React.FC<Props> = ({
  title,
  onPress,
  halfWidth = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, halfWidth && styles.halfWidthContainer]}
      onPress={() => onPress()}>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <SelectArrowDownIcon width={30} height={30} />
    </TouchableOpacity>
  )
}
