import React, {useMemo, useRef, useState} from 'react'
import {FlatList, Platform, View} from 'react-native'
import {BottomSheetTextInput} from '@gorhom/bottom-sheet'

import {CustomInput} from '@/components/CustomInput'
import {Button} from '@/components/Button'
import {BaseSelect} from '@/components/Select'
import {SearchSelectListItem} from './components/ListItem'

import HeaderSearchIcon from '@/assets/icons/headerSearchIcon.svg'

import styles from './styles'

interface Props {
  title: string
}

export const SearchSelect: React.FC<Props> = ({title}) => {
  const baseSelectRef = useRef<BaseSelect | null>(null)

  const [searchValue, setSearchValue] = useState<string>('')
  const [selectedValue, setSelectedValue] = useState<string>('')

  const data = ['BMW', 'Audi', 'Mercedes-Benz']

  const filteredData = useMemo(() => {
    const result = data.filter(x => x.includes(searchValue))

    if (result.length === 0) {
      return data
    }

    return result
  }, [searchValue, data])

  function handleClose() {
    baseSelectRef.current?.close()
  }

  function handleListItemPress(value: string) {
    setSelectedValue(value)
    handleClose()
  }

  return (
    <BaseSelect
      title={title}
      ref={baseSelectRef}
      snapPoints={['70%']}
      value={selectedValue || null}
      onResetFilter={() => {
        setSelectedValue('')
        setSearchValue('')
      }}>
      <View style={styles.headerContainer}>
        <CustomInput
          placeholder="Brand name"
          Icon={HeaderSearchIcon}
          CustomTextInputComponent={
            Platform.OS === 'ios' ? BottomSheetTextInput : undefined
          }
          value={searchValue}
          onChangeText={setSearchValue}
        />
        <Button
          ghost
          fullWidth={false}
          onPress={handleClose}
          title={'Cancel'}
        />
      </View>
      <FlatList
        data={filteredData}
        renderItem={({item, index}) => (
          <SearchSelectListItem
            title={item}
            noBorder={data.length - 1 === index}
            onPress={() => handleListItemPress(item)}
          />
        )}
      />
    </BaseSelect>
  )
}
