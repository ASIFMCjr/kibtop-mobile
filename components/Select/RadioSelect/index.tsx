import React, {useEffect} from 'react'
import {BottomSheetFlatList} from '@gorhom/bottom-sheet'
import {SvgProps} from 'react-native-svg'

import {BaseSelect} from '../BaseSelect'
import {RadioSelectListItem} from './components/ListItem'

interface Props {
  title: string
  options: string[]
  halfWidth?: boolean
  small?: boolean
  SmallButtonIcon?: React.FC<SvgProps>
  showValue?: boolean
  hasPrefix?: boolean
  value: string | undefined
  onChange: (value: string) => void
}

export const RadioSelect: React.FC<Props> = ({
  title,
  options,
  halfWidth = false,
  small = false,
  SmallButtonIcon,
  showValue = true,
  hasPrefix,
  value,
  onChange,
}) => {
  useEffect(() => {
    if (value === undefined) {
      onChange(options[0])
    }
  }, [value])

  return (
    <BaseSelect
      title={title}
      halfWidth={halfWidth}
      small={small}
      SmallButtonIcon={SmallButtonIcon}
      value={value}
      showValue={showValue}
      hasPrefix={hasPrefix}
      onResetFilter={() => {
        onChange(options[0])
      }}>
      <BottomSheetFlatList
        data={options}
        renderItem={({item}) => (
          <RadioSelectListItem
            title={item}
            isSelected={item === value}
            onPress={() => onChange(item)}
          />
        )}
        keyExtractor={item => item}
      />
    </BaseSelect>
  )
}
