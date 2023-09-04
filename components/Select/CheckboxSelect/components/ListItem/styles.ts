import {Dimensions, StyleSheet} from 'react-native'

import {colors} from '@/constants/colors'
import {appFont} from '@/constants/fonts'

const {width} = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    height: 45,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: appFont.Semibold,
    color: colors.dark,
    fontSize: 16,
    letterSpacing: -0.5,
    marginLeft: 17,
  },
})
