import {CustomInput} from '@/components/CustomInput'
import React, {useState} from 'react'
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native'

import {LocationSelect, RadioSelect} from '@/components/Select'

import HeaderArrowLeftIcon from '@/assets/icons/headerArrowLeftIcon.svg'
import LocationInputIcon from '@/assets/icons/locationInputIcon.svg'
import SmallButtonArrowDown from '@/assets/icons/smallButtonArrowDownIcon.svg'

import styles from './styles'
import {useNavigation, useRoute} from '@react-navigation/native'
import {CategoriesList} from '@/constants/categories'
import {SvgProps} from 'react-native-svg'

interface Props {}

export const CategoryScreenHeader: React.FC<Props> = ({}) => {
  const [location, setLocation] = useState<string>()

  const navigation = useNavigation()
  const {
    params: {categoryId},
  } = useRoute()

  const IconComponent = CategoriesList[categoryId]
    .iconImage as React.FC<SvgProps>

  return (
    <>
      <SafeAreaView style={styles.safeAreaView} />
      <View style={styles.container}>
        <View style={styles.searchLineContainer}>
          <TouchableOpacity
            style={styles.backButtonContainer}
            onPress={() => navigation.goBack()}>
            <HeaderArrowLeftIcon height={30} width={30} />
          </TouchableOpacity>
          <CustomInput placeholder="Search product" />
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.titleContainer}>
            {typeof CategoriesList[categoryId].iconImage === 'number' ? (
              <Image
                source={CategoriesList[categoryId].iconImage as number}
                style={styles.categoryIcon}
              />
            ) : (
              <IconComponent width={39} height={39} style={{marginRight: 5}} />
            )}
            <Text style={styles.title}>{CategoriesList[categoryId].title}</Text>
          </View>
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
    </>
  )
}
