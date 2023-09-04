import React, {useState,useEffect, useCallback} from 'react'
import { Text,FlatList, Touchable, View} from 'react-native'

import {ProductItem} from '@/components/ProductItem'
import { useNavigation } from '@react-navigation/native';

import axios from 'axios'
import styles from '../RecommendationBlock/styles'
import { values } from 'mobx'
import {BASE_URL} from '@/config'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { create } from 'react-test-renderer';

interface Props {}

export const NewBlock: React.FC<Props> = ({}) => {
  const [items, setItems] = useState([])
  const [time, setIime] = useState([]);
  const [date, setDate] = useState('');

  const navigation = useNavigation();


      useEffect(() => {
        var now = new Date()
        //console.log(now)
        setDate(now)
      
      axios.get(BASE_URL + 'v1/new/?limit=8&offset=1')
        
      .then(({ data }) => {
        const adverts = data
                let advertsFull = []
                for (const category in adverts) {
                    advertsFull = [...advertsFull, 
                        ...adverts[category].map(advert => ({...advert, category: category})
                        )]
                }
     
        setItems(advertsFull.slice(0, 8))
        // console.log(advertsFull.slice(0, 8))
       
      }).catch((err) => {
        console.log(err);
        alert('Ошибка')
      })
    }, []);


  return (
    <>
    <Text style={styles.title}>New</Text>

<View>
<View  style={{width: "98%", flexDirection:'row',flexWrap: "wrap", justifyContent: 'space-between'}}>
    {
    items.map((item) => {
      //console.log(item.created_at)

      return (
        <View style={{width: '49%'}}>
          <TouchableOpacity onPress={() => navigation.navigate('ProductDetailScreen', { key: item.category, id:item.id})}>
            <ProductItem 
              imageSource = {{uri:BASE_URL + item.upload}}
              title = {item.title_en}
              subTitle1 = {item.city}
              subTitle2 = {item.created_at}
              price = {item.price}/>
          </TouchableOpacity>
        </View>
          )
        })
    }
    </View>
  
</View>


</>
  )
}
      