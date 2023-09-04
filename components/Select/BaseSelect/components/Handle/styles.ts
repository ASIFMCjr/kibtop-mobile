import {StyleSheet} from 'react-native'

import {colors} from '@/constants/colors'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  handle: {
    width: 60,
    height: 5,
    borderRadius: 10,
    backgroundColor: colors.lightGray,
  },
})
