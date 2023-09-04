import React from 'react'
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import ArrowRightIcon from '@/assets/icons/arrowRightIcon.svg'

import styles from './styles'
import { BORDER_RADIUS_20 } from '@/styles/borders';

interface Props {

  onPress?: () => void
  onPressIcon?: () => void
  iconSource?: ImageSourcePropType
  imageSource?: ImageSourcePropType
  title: string
  subTitle1: string
  subTitle2: string
  background?: () => void

}

export const MainScreenPromoBlockListItem = ({
  onPress,
  onPressIcon,
  iconSource,
  imageSource,
  title,
  subTitle1,

}: Props) => {
  const navigation = useNavigation();
  return (
    
      <ImageBackground style={styles.container} imageStyle={{borderRadius:20}} source={ imageSource}>
        <View style={styles.column}>
        <Image style={styles.icon} source={iconSource}/>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {subTitle1}
        </Text>
        <View style={styles.moreButtonContainer}>
          <Text style={styles.moreButtonTitle}>more</Text>
          <ArrowRightIcon />
          </View>
        </View>
        </View>
      </ImageBackground>
  )
}
