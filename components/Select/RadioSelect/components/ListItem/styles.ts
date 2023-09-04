import {StyleSheet} from 'react-native'

import {colors} from '@/constants/colors'
import {appFont} from '@/constants/fonts'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxOuterContainer: {
    height: 30,
    width: 30,
    backgroundColor: colors.brightGray,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInnerContainer: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.blue,
  },
  title: {
    fontFamily: appFont.Semibold,
    fontSize: 16,
    letterSpacing: -0.5,
    color: colors.dark,
    marginLeft: 15,
  },
})
