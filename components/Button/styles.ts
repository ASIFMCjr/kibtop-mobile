import {Dimensions, StyleSheet} from 'react-native'

import {colors} from '@/constants/colors'
import {appFont} from '@/constants/fonts'

const {width} = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    height: 45,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
    marginHorizontal: 15,
  },
  title: {
    fontFamily: appFont.Semibold,
    color: colors.white,
    fontSize: 16,
    letterSpacing: -0.5,
  },
  ghostContainer: {
    backgroundColor: colors.transparent,
  },
  ghostTitle: {
    color: colors.blue,
  },
  fullWidth: {
    width: width - 30,
  },
})
