import {StyleSheet} from 'react-native'

import {appFont} from '@/constants/fonts'

export default StyleSheet.create({
  container: {
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'rgba(65, 64, 66, 0.4)',
    letterSpacing: -0.5,
    fontFamily: appFont.Regular,
    fontSize: 12,
    marginLeft: 5,
  },
})
