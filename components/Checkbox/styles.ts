import {StyleSheet} from 'react-native'

import {colors} from '@/constants/colors'

export default StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 8.91,
    backgroundColor: colors.brightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedContainer: {
    backgroundColor: colors.blue,
  },
})
