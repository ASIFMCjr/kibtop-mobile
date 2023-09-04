import React, {useState} from 'react'
import {FlatList} from 'react-native'

import {BaseSelect} from '@/components/Select'
import {CheckboxSelectListItem} from './components/ListItem'
import {SvgProps} from 'react-native-svg'

interface Props {
  title: string
  options: string[]
  halfWidth?: boolean
  small?: boolean
  SmallButtonIcon?: React.FC<SvgProps>
}

export const CheckboxSelect: React.FC<Props> = ({
  title,
  options,
  halfWidth,
  small,
  SmallButtonIcon,
}) => {
  const [values, setValues] = useState<string[]>([])

  return (
    <BaseSelect
      halfWidth={halfWidth}
      title={title}
      small={small}
      SmallButtonIcon={SmallButtonIcon}
      value={values.join(', ') || null}
      onResetFilter={() => {
        setValues([])
      }}>
      <FlatList
        data={options}
        renderItem={({item}) => (
          <CheckboxSelectListItem
            title={item}
            isChecked={values.includes(item)}
            onPress={() => {
              if (values.includes(item)) {
                setValues(state => state.filter(x => x !== item))
              } else {
                setValues(state => [...state, item])
              }
            }}
          />
        )}
      />
    </BaseSelect>
  )
}
