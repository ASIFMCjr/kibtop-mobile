import React, {useState, useEffect} from 'react'
import {Text, View, FlatList} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {ProductItem} from '@/components/ProductItem'
import {EstateItem} from '@/components/EstateItem'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {BASE_URL} from '@/config'

import styles from './styles'

import axios from 'axios'

interface Props {}

export const MainScreenRecommendationBlock: React.FC<Props> = ({}) => {
  const navigation = useNavigation();
  // const [items, setItems] = useState([]);
    const [items, setItems] = useState<Object>({});
    useEffect(() => {
      axios.get(BASE_URL + 'v1/recommend/')

      .then(({ data }) => {
      //console.log(Object.values(data).flat())
      //setItems(Object.values(items).flat())
      setItems(data)
      }).catch((err) => {
        console.log(err);
        alert('Ошибка')
      })
    }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended</Text>
      {/* <View style={{width: "98%", flexDirection:'row',flexWrap: "wrap", justifyContent: 'space-between'}}>
    
    { Object.entries(items).map(([key,value]) => {
      //console.log(value)
      return(
        <View style={{ flexDirection:'row'}}>
        {
          value.map((item) => {
          //  console.log(key)

            return (
              <View >
                <TouchableOpacity onPress={() => navigation.navigate('ProductDetailScreen', { key, id:item.id})}>
                  <ProductItem 
                    key={key}
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
  
  
        )
      })}
  </View> */}
    </View>
  )
}



{/* <FlatList 
        numColumns={2}
          
        //keyExtractor = {key}
        data={(items.filter(d => d.recommend === true)).slice(0,4)}
        renderItem = {({item}) => 
        (
        <ProductItem 
            imageSource = {{ uri: BASE_URL + item.upload}}
            title = {item.title_en}
            subTitle1 = {item.city}
            subTitle2 = {item.created_at}
            price = {item.price}
            />)
    }/> */}