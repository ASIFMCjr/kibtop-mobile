import React from 'react'
import {DeviceEventEmitter, SafeAreaView} from 'react-native'
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native'

import {Header} from '@/components/Header'
import {List} from '@/components/List'

import {AppNavigatorParamsList} from '@/navigation'

import styles from './styles'

export const ListSelectListScreen: React.FC<{}> = ({}) => {
  const {
    params: {title, data, eventName},
  } = useRoute<RouteProp<AppNavigatorParamsList, 'ListSelectListScreen'>>()
  const navigation = useNavigation()

  function handleItemPress(_: string, index: number) {
    DeviceEventEmitter.emit(eventName, index)
    navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={title} />
      <List data={data.map(title => ({title}))} onItemPress={handleItemPress} />
    </SafeAreaView>
  )
}
