import {Button} from '@/components/Button'
import {EstateItem} from '@/components/EstateItem'
import {FiltersList, IFilterValues} from '@/components/FiltersList'
import {ProductItem} from '@/components/ProductItem'
import {CategoriesList} from '@/constants/categories'
import {useRoute, useNavigation} from '@react-navigation/native'
import React, {useState, useEffect} from 'react'
import {DeviceEventEmitter, ScrollView, View, Text, TouchableHighlight} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import {LocationSelect, RadioSelect} from '@/components/Select'
import {CustomInput} from '@/components/CustomInput'
import HeaderArrowLeftIcon from '@/assets/icons/headerArrowLeftIcon.svg'
import LocationInputIcon from '@/assets/icons/locationInputIcon.svg'
import SmallButtonArrowDown from '@/assets/icons/smallButtonArrowDownIcon.svg'
import axios from "axios";
import HeaderSettingsIcon from '@/assets/icons/headerSettingsIcon.svg'
import AllCategoriesIcon from '@/assets/icons/allCategoriesIcon.svg'
import HeaderSearchIcon from '@/assets/icons/headerSearchIcon.svg'



import styles from './styles'

export const SearchScreen: React.FC<Props> = ({route, navigation}) => {
  const [filterValues, setFilterValues] = useState<IFilterValues>({})
//   const navigation = useNavigation()
    const {search, cat} = route.params
    const [zapisi, setZapisi] = useState([])
    const [ad, setAd] = useState([])
    const [location, setLocation] = useState<string>()

    const BASE_URL = 'https://api.kibtop.com'

  const instance = axios.create({
    baseURL: BASE_URL+'/v1/',

    withCredentials: false,
    headers: {
        "Accept-Encoding": "*"
    }
  })
//   console.log(search, key)
useEffect(async () => {
    const limit = 8
        const params = `?${cat ? `cat=${cat}&` : ''}page=${0}&limit=${limit}${search ? `&search=${search}&fuzz=70` : ''}`
        return await instance.get(`category/${params}`)
            .then(({data}) => {
                const adverts = data.results
                let advertsFull = []
                for (const category in adverts) {
                    advertsFull = [...advertsFull, 
                        ...adverts[category].map(advert => ({...advert, category: category})
                        )]
                }
                setZapisi(advertsFull)
                setAd(advertsFull)
                // return advertsFull
                console.log(advertsFull)
                
            }).catch(() => null)
  },[])
  useEffect(() => {
    {location === 'Cheaper' ? setZapisi(zapisi.sort((a,b) => {return b.price - a.price})) :
    location === 'Expensive' ? setZapisi(zapisi.sort((a,b) => {return a.price - b.price})):
    location === 'Default' ? setZapisi(ad)  : console.log('ok')
  }
  }, [location])

  return (
    
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.searchLineContainer}>
          <TouchableOpacity
            style={styles.backButtonContainer}
            onPress={() => navigation.goBack()}>
            <HeaderArrowLeftIcon height={30} width={30} />
          </TouchableOpacity>
          <CustomInput placeholder="Search product" defaultValue={search} />
          <TouchableOpacity
            style={styles.settingsButtonContainer}
            onPress={() => navigation.navigate('FiltersScreen')}>
            <HeaderSettingsIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.filtersContainer}>
            <LocationSelect
              small
              title="Location"
              SmallButtonIcon={LocationInputIcon}
              showValue
            />
            <RadioSelect
              small
              title="Sorting"
              options={['Default', 'Cheaper', 'Expensive']}
              SmallButtonIcon={SmallButtonArrowDown}
              hasPrefix
              showValue
              value={location}
              onChange={setLocation}
            />
          </View>
        </View>
      </View>  
            
        
      <ScrollView style={styles.scrollView}>
      
        {/* <Button onPress={() => {

            }} title={'Show ads'} />
        <Button
          ghost
          onPress={() => DeviceEventEmitter.emit('RESET_FILTERS')}
          title={'Reset filters'}
        /> */}
        <View style={styles.container}>
          <View >
              
              
            
              <View style={{width: "98%", flexDirection:'row',flexWrap: "wrap", justifyContent: 'space-between'}}>
                      {
                      zapisi.map(a => {
                          console.log(a.category, a.id)
                          return (
                            <View style={{width: '49%'}}>
                              <TouchableOpacity onPress={() => navigation.navigate('ProductDetailScreen', { key:a.category, id:a.id})}>
                                <ProductItem 
                                  imageSource = {{ uri: BASE_URL + a.upload}}
                                  title = {a.title_en}
                                  subTitle1 = {a.city}
                                  subTitle2 = {a.created_at}
                                  price = {a.price}
                                />
                              </TouchableOpacity>
                            </View>
                          )
                      })
                      }

                  
              </View>
          
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
