import React, {useMemo, useRef, useState} from 'react'
import {FlatList, Platform, View} from 'react-native'
import {BottomSheetTextInput} from '@gorhom/bottom-sheet'

import {CustomInput} from '@/components/CustomInput'
import {BaseSelect} from '@/components/Select'
import {Button} from '@/components/Button'
import {LocationSelectListItem} from './components/ListItem'

import LocationInputIcon from '@/assets/icons/locationInputIcon.svg'

import styles from './styles'
import {SvgProps} from 'react-native-svg'

interface Props {
  title: string
  small?: boolean
  SmallButtonIcon?: React.FC<SvgProps>
  showValue?: boolean
}

export const LocationSelect: React.FC<Props> = ({
  title,
  small,
  SmallButtonIcon,
  showValue = false,
}) => {
  const baseSelectRef = useRef<BaseSelect>(null)

  const [searchValue, setSearchValue] = useState<string>('')
  const [selectedValue, setSelectedValue] = useState<string>('')

  const data = ['Limassol', 'Nicosia', 'Pathos']

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
      snapPoints={['60%']}
      small={small}
      SmallButtonIcon={SmallButtonIcon}
      value={selectedValue}
      onResetFilter={() => {
        setSelectedValue('')
        setSearchValue('')
      }}>
      <View style={styles.headerContainer}>
        <CustomInput
          placeholder="City or region"
          Icon={LocationInputIcon}
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
          <LocationSelectListItem
            title={item}
            noBorder={data.length - 1 === index}
            onPress={() => handleListItemPress(item)}
          />
        )}
      />
    </BaseSelect>
  )
}
