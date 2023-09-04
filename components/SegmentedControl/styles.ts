import {StyleSheet} from 'react-native'

import {colors} from '@/constants/colors'
import {appFont} from '@/constants/fonts'

import {shadowColor} from '@/utils/shadowColor'

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  tile: {
    shadowColor: shadowColor('rgba(0, 0, 0, 0.12)'),
    shadowRadius: 8,
    shadowOpacity: 1,
    shadowOffset: {
      height: 3,
      width: 0,
    },
    elevation: 8,
  },
  title: {
    fontFamily: appFont.Semibold,
    fontSize: 16,
    color: colors.dark,
    letterSpacing: -0.5,
  },
})
