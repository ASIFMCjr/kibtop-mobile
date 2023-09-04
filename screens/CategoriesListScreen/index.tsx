import React from 'react'
import {DeviceEventEmitter, SafeAreaView} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import {Header} from '@/components/Header'
import {List} from '@/components/List'

import {CategoriesList} from '@/constants/categories'

import styles from './styles'

export const CategoriesListScreen: React.FC<{}> = ({}) => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Categories" />
      <List
        data={CategoriesList}
        onItemPress={(_, index) => {
          DeviceEventEmitter.emit('CategoryChanged', index)
          navigation.goBack()
        }}
      />
    </SafeAreaView>
  )
}
