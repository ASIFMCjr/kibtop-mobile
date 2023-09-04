import {Dimensions, StyleSheet} from 'react-native'

import {colors} from '@/constants/colors'

const {width} = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    height: 171,
    backgroundColor: colors.gray,
    width: width - 90,
    borderRadius: 20,
    marginHorizontal: 5,
  },
})
