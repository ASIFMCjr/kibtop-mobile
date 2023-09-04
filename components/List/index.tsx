import React from 'react'
import {FlatList} from 'react-native'
import {SvgProps} from 'react-native-svg'

import {ListListItem} from './components/ListItem'

interface Props {
  data: {
    title: string
    iconImage?: number | React.FC<SvgProps>
  }[]
  onItemPress: (title: string, index: number) => void
}

export const List: React.FC<Props> = ({data, onItemPress}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => (
        <ListListItem
          title={item.title}
          iconImage={item.iconImage}
          noBorder={index === data.length - 1}
          onPress={() => onItemPress(item.title, index)}
        />
      )}
    />
  )
}
