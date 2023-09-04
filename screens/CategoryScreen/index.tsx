import {Button} from '@/components/Button'
import {EstateItem} from '@/components/EstateItem'
import {FiltersList, IFilterValues} from '@/components/FiltersList'
import {ProductItem} from '@/components/ProductItem'
import {CategoriesList} from '@/constants/categories'
import {useRoute} from '@react-navigation/native'
import React, {useState} from 'react'
import {DeviceEventEmitter, ScrollView, View} from 'react-native'
import {CategoryScreenHeader} from './components/Header'

import styles from './styles'

export const CategoryScreen: React.FC<{}> = ({}) => {
  const [filterValues, setFilterValues] = useState<IFilterValues>({})

  const {
    params: {categoryId},
  } = useRoute()

  return (
    <View style={styles.container}>
      <CategoryScreenHeader />
      <ScrollView style={styles.scrollView}>
        <View style={styles.filtersContainer}>
          <FiltersList
            categoryIndex={categoryId}
            replaceListsWithRadio
            values={filterValues}
            onValueChange={(key, newValue) =>
              setFilterValues(state => ({...state, [key]: newValue}))
            }
          />
        </View>
        <Button onPress={() => null} title={'Show ads'} />
        <Button
          ghost
          onPress={() => DeviceEventEmitter.emit('RESET_FILTERS')}
          title={'Reset filters'}
        />
        <View style={styles.adsContainer}>
          {[...Array(10).keys()].map(() =>
            CategoriesList[categoryId].title === 'Real estate' ? (
              <EstateItem />
            ) : (
              <ProductItem />
            ),
          )}
        </View>
      </ScrollView>
    </View>
  )
}
