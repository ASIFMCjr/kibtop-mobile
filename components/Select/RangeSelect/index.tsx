import React, {useMemo, useState} from 'react'
import {Alert, View} from 'react-native'
import {BottomSheetTextInput} from '@gorhom/bottom-sheet'

import {CustomInput} from '@/components/CustomInput'
import {BaseSelect} from '@/components/Select'

import styles from './styles'

interface Props {
  title: string
  halfWidth?: boolean
  units?: string
}

export const RangeSelect: React.FC<Props> = ({
  title,
  halfWidth = false,
  units,
}) => {
  const [from, setFrom] = useState<string>('')
  const [to, setTo] = useState<string>('')

  const valueString = useMemo(() => {
    if (!from && to) {
      return `${to} - ${to}`
    }

    if (!to && from) {
      return `${from} - ${from}`
    }

    if (from && to) {
      return `${from} - ${to}`
    }

    return null
  }, [from, to])

  function handleFromChange(newValue: string) {
    if (!validateInput(newValue)) {
      return
    }

    setFrom(newValue)
  }

  function handleToChange(newValue: string) {
    if (!validateInput(newValue)) {
      return
    }

    setTo(newValue)
  }

  function validateInput(inputString: string) {
    return /^\d*$/.test(inputString)
  }

  function validateBeforeSubmit() {
    if (parseInt(from) > parseInt(to)) {
      Alert.alert('"From" cannot be greater than "to"')
      return false
    }

    return true
  }

  return (
    <BaseSelect
      title={[title, units].filter(Boolean).join(', ')}
      headerTitle={title}
      halfWidth={halfWidth}
      snapPoints={[220]}
      value={valueString}
      validateBeforeSubmit={validateBeforeSubmit}
      onResetFilter={() => {
        setFrom('')
        setTo('')
      }}>
      <View style={styles.container}>
        <CustomInput
          placeholder="from"
          sqared
          halfWidth
          CustomTextInputComponent={BottomSheetTextInput}
          keyboardType="numeric"
          value={from}
          onChangeText={handleFromChange}
        />
        <CustomInput
          placeholder="to"
          sqared
          halfWidth
          CustomTextInputComponent={BottomSheetTextInput}
          keyboardType="numeric"
          value={to}
          onChangeText={handleToChange}
        />
      </View>
    </BaseSelect>
  )
}
