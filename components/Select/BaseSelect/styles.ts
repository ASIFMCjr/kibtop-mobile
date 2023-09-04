import {StyleSheet} from 'react-native'

import {colors} from '@/constants/colors'
import {appFont} from '@/constants/fonts'

export default StyleSheet.create({
  modalHeaderContainer: {
    height: 35,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalHeaderTitle: {
    color: colors.dark,
    fontSize: 16,
    letterSpacing: -0.5,
    fontFamily: appFont.Semibold,
  },
})
