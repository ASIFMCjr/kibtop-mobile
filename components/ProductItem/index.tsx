import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'

import styles from './styles'

interface ProductItemProps {
  hasPriceInterval?: boolean
  onPress?: () => void
  onPressIcon?: () => void
  iconSource?: ImageSourcePropType
  containerStyles?: StyleProp<ViewStyle>
  imageSource?: ImageSourcePropType
  title: string
  subTitle1: string
  subTitle2: string
  price: string
  hasMask?: boolean
  iconTintColor?: string
}


export const ProductItem = ({
    
  hasPriceInterval,
  onPress,
  onPressIcon,
  iconSource,
  imageSource,
  containerStyles,
  title,
  subTitle1,
  subTitle2,
  price,
  hasMask = false,
  iconTintColor,
}: ProductItemProps) => {
  const [liked, setLiked] = useState<boolean>(false)
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.container, containerStyles]}
     >
        
      <ImageBackground style={styles.imageBlock} imageStyle={{ borderRadius: 20}} source={ imageSource} >
        
        <TouchableOpacity
          style={styles.likeButtonContainer}
          onPress={onPressIcon}>
          {!iconSource ? (
            <Image
              style={[styles.likeIcon, {tintColor: iconTintColor}]}
              source={
                liked
                  ? require('@/assets/icons/likeIconFilled.png')
                  : require('@/assets/icons/likeIconOutlined.png')
              }
            />
          ) : (
            <Image
              style={[styles.likeIcon, {tintColor: iconTintColor}]}
              source={iconSource}
            />
          )}
        </TouchableOpacity>
        {hasMask && <View style={styles.imageBlockMask} />}
      </ImageBackground>
      <View style={styles.titleContainer}>
        
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
        <Text style={styles.price}>
          {hasPriceInterval && <Text style={styles.pricePrefix}>from </Text>}
          {price && price}
        </Text>
      </View>
      <Text style={styles.subtitle}>{subTitle1}</Text>
      <Text style={styles.subtitle2}>{subTitle2}</Text>
    </TouchableOpacity>
  )
}
