import {StyleSheet} from 'react-native'

import {colors} from '@/constants/colors'
import {appFont} from '@/constants/fonts'

export default StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 10,
    height: 75,
    minWidth: 60,
  },
  title: {
    fontSize: 11,
    lineHeight: 11,
    color: colors.dark,
    fontFamily: appFont.Semibold,
    textAlign: 'center',
    marginTop: 7,
  },
  singleButton: {
    marginRight: 0,
  },
})
