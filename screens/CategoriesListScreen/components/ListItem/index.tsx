import React from 'react'
import {
  Image,
  ImageRequireSource,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {SvgProps} from 'react-native-svg'

import styles from './styles'

interface Props {
  title: string
  iconImage?: ImageRequireSource | React.FC<SvgProps>
  noBorder?: boolean
  onPress: () => void
}

export const CategoriesListScreenListItem: React.FC<Props> = ({
  title,
  iconImage,
  noBorder,
  onPress,
}) => {
  const Icon = () => {
    if (!iconImage) {
      return null
    }

    // ImageRequireSource is aliased to number type
    if (typeof iconImage === 'number') {
      return <Image source={iconImage} style={styles.icon} />
    }

    const IconComponent = iconImage

    return <IconComponent style={styles.icon} />
  }

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={[styles.container, noBorder && styles.noBorder]}>
        <Icon />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}
