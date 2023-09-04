import {StyleSheet} from 'react-native'

import {colors} from '@/constants/colors'
import {appFont} from '@/constants/fonts'

export default StyleSheet.create({
  container: {
    height: 43,
    width: '100%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  title: {
    fontFamily: appFont.Semibold,
    fontSize: 16,
    letterSpacing: -0.5,
    color: colors.dark,
  },
})
