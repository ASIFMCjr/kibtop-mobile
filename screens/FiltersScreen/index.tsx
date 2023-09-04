import React, {useEffect, useRef, useState} from 'react'
import {
  DeviceEventEmitter,
  EventSubscription,
  SafeAreaView,
  View,
} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import {Header} from '@/components/Header'
import {Button} from '@/components/Button'
import {Divider} from '@/components/Divider'
import {FiltersList, IFilterValues} from '@/components/FiltersList'
import {LocationSelect, RadioSelect, SelectButton} from '@/components/Select'

import {CategoriesList} from '@/constants/categories'

import styles from './styles'

export const FiltersScreen: React.FC<{}> = ({}) => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState<number>(0)
  const [filterValues, setFilterValues] = useState<IFilterValues>({})
  const [location, setLocation] = useState<string>()

  const subscriptionRef = useRef<EventSubscription>()

  const navigation = useNavigation()

  useEffect(() => {
    subscriptionRef.current = DeviceEventEmitter.addListener(
      'CategoryChanged',
      handleCategoryChanged,
    )

    return () => subscriptionRef.current?.remove()
  }, [])

  function handleCategoryChanged(value: number) {
    setCurrentCategoryIndex(value)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Filters" />
      <SelectButton
        title={CategoriesList[currentCategoryIndex].title}
        onPress={() => navigation.navigate('CategoriesListScreen')}
      />
      <View style={styles.categoryFiltersContainer}>
        <FiltersList
          categoryIndex={currentCategoryIndex}
          values={filterValues}
          onValueChange={(key, newValue) =>
            setFilterValues(state => ({...state, [key]: newValue}))
          }
        />
      </View>
      <Divider />
      <LocationSelect title="Location" />
      <RadioSelect
        title="Sorting"
        options={['Default', 'Cheaper', 'Expensive']}
        hasPrefix
        value={location}
        onChange={setLocation}
      />
      <Button onPress={() => null} title={'Show ads'} />
      <Button
        ghost
        onPress={() => DeviceEventEmitter.emit('RESET_FILTERS')}
        title={'Reset filter'}
      />
    </SafeAreaView>
  )
}
