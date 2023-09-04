import {StyleSheet} from 'react-native'

import {colors} from '@/constants/colors'
import {appFont} from '@/constants/fonts'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 45,
    minWidth: 51,
  },
  title: {
    fontSize: 11,
    color: colors.dark,
    fontFamily: appFont.Regular,
  },
  titleFocused: {
    fontFamily: appFont.Bold,
  },
})
