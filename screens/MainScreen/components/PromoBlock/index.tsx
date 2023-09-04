import React, {useState, useEffect} from 'react'
import {FlatList, View} from 'react-native'

import {MainScreenPromoBlockListItem} from './components/ListItem'
import axios from 'axios'
import {BASE_URL} from '@/config'

import styles from './styles'

interface Props {}

export const MainScreenPromoBlock: React.FC<Props> = ({}) => {
  const [items, setItems] = useState([]);
    useEffect(() => {
      axios.get(BASE_URL + 'v1/stock/')

      .then(({ data }) => {
        //console.log(Object.values(data.results.en))
        setItems(Object.values(data.results.en))
      }).catch((err) => {
        console.log(err);
        alert(err)
      })
    }, []);
  return (
    <View style={styles.container}>
      <FlatList
       // keyExtractor={i => String(i)}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        data={items}
        renderItem = {({item}) => 
    (
        <MainScreenPromoBlockListItem 
        title={item.title_en}
        subTitle1={item.desc_en}
        imageSource={{uri:item.background}}
        iconSource={{uri:item.img}}
        />)
}/> 
    </View>
  )
}
