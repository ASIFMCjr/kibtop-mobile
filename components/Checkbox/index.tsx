import React from 'react'
import {View} from 'react-native'

import CheckboxCheckIcon from '@/assets/icons/checkboxCheckIcon.svg'

import styles from './styles'

interface Props {
  isChecked: boolean
}

export const Checkbox: React.FC<Props> = ({isChecked = false}) => {
  return (
    <View style={[styles.container, isChecked && styles.selectedContainer]}>
      {isChecked && <CheckboxCheckIcon />}
    </View>
  )
}
