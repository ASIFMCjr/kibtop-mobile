import React, {useEffect, useState} from 'react'
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Text,
  FlatList
} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import HeaderSettingsIcon from '@/assets/icons/headerSettingsIcon.svg'
import AllCategoriesIcon from '@/assets/icons/allCategoriesIcon.svg'
import HeaderSearchIcon from '@/assets/icons/headerSearchIcon.svg'

import {MainScreenHeaderCategoryButton} from './components/CategoryButton'
import {MainScreenHeaderDivider} from './components/Divider'
import {CustomInput} from '@/components/CustomInput'

import styles from './styles'
import {CategoriesList} from '@/constants/categories'
import LinearGradient from 'react-native-linear-gradient'
import {colors} from '@/constants/colors'
import { SearchBar } from 'react-native-screens'

import axios from "axios";
import { array, boolean } from 'mobx-state-tree/dist/internal'
import { ProductItem } from '@/components/ProductItem'


interface Props {}

export const MainScreenHeader:any | React.FC<Props> =  ({}) => {
  const navigation = useNavigation()

  const BASE_URL = 'https://api.kibtop.com'

  const instance = axios.create({
    baseURL: BASE_URL+'/v1/',

    withCredentials: false,
    headers: {
        "Accept-Encoding": "*"
    }
  })

  
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)
  const [zapisi, setZapisi] = useState<Object>({})
  const [category, setCategory] = useState<Object>({})
  const [res, setRes] = useState([])

  useEffect(() => {
    // fetchData()
    getAdv(search)
  },[search])


  useEffect(() => {
    fetchData()
  },[])

  const fetchData = () => {
    instance.get(`new/`)
    .then(({data}) => {
      setCategory(data)
    }).catch((err) => {
      console.log(err)
    })
  }

  
  const getAdv = async (search) => {
    const limit = 8
    const params = `?
    ${search ? `cat=${search}&` : ''}
    page=${0}
    &unique=1
    &limit=${limit}
    ${search ? `&search=${search}&fuzz=70` : ''}`
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
      // console.log(advertsFull) 
        }).catch(() => null)
    
  }

  const getData =  () => {
    
    return (
      <>
      
      <View style={styles.underSearchLineContainer}>
        
      {
        
        search != ''
        ? <View>
          {
            
          zapisi.map(a => {
            return (
              <TouchableOpacity style={styles.underSearchLineContainerEl} onPress={() => {
                let cat = a.category
                let search = a.title_en
                // console.log(search)
                navigation.navigate('SearchScreen', {
                  search,
                  cat,
                })
                }} style={styles.underSearchLineContainerEl}>
                <Text>{a.title_en}</Text>
                <Text style={{marginLeft: 0, color: '#b2b2b2'}}>{a.category}</Text>
              </TouchableOpacity>
            )
          })
          
        }
        
      
      </View>
        : <></>
      }
             
      </View>
      </>
    )
  }

  return (
    <>
      <SafeAreaView style={styles.safeAreaView} />
      <View style={styles.container}>
        <View style={styles.searchLineContainer}>
          <CustomInput onFocus={() => setOpen(true)} Icon={HeaderSearchIcon} placeholder="Search Product" value={search} onChangeText={(text) => {
            setSearch(text)
            }}
            onSubmitEditing={() =>{ 
              // let cat = ''
              navigation.navigate('SearchScreen', {
                search: zapisi[0].title_en,
                cat: zapisi[0].category,
              })}
            }/>
          <TouchableOpacity
            style={styles.settingsButtonContainer}
            onPress={() => navigation.navigate('FiltersScreen')}>
            <HeaderSettingsIcon />
          </TouchableOpacity>
        </View>
        <View>
            
            {search != '' ? getData() : <></>}

            
        </View>

        <View style={styles.categoriesButtonsRow}>
          <MainScreenHeaderCategoryButton
            title="All categories"
            onPress={() =>
              navigation.navigate('CategoryScreen', {
                categoryId: 0,
              })
            }
            IconComponent={AllCategoriesIcon}
            singleButton
          />
          <MainScreenHeaderDivider />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollViewContainer}>
            {CategoriesList.filter(
              category => category.title !== 'All categories',
            ).map((category, index) => (
              <MainScreenHeaderCategoryButton
                title={category.titleForHeader ?? category.title}
                IconComponent={() =>
                  typeof category.iconImage === 'number' ? (
                    <Image
                      source={category.iconImage}
                      style={styles.categoryButtonImage}
                    />
                  ) : null
                }
                onPress={() =>
                  navigation.navigate('CategoryScreen', {
                    categoryId: index + 1,
                  })
                }
              />
            ))}
            <View style={{width: 15}} />
          </ScrollView>
          <LinearGradient
            colors={['#FFFFFF00', colors.white]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.gradient}
            pointerEvents="none"
          />
        </View>
      </View>
    </>
  )
}
