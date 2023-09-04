import {Dimensions, StyleSheet} from 'react-native'

import {colors} from '@/constants/colors'
import {appFont} from '@/constants/fonts'

const {width} = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    width: width - 30,
    height: 60,
    flexDirection: 'row',
    paddingVertical: 15,
    marginHorizontal: 15,
    alignItems: 'center',
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
  },
  title: {
    fontFamily: appFont.Semibold,
    fontSize: 16,
    letterSpacing: -0.5,
    color: colors.dark,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  noBorder: {
    borderBottomWidth: 0,
  },
})
