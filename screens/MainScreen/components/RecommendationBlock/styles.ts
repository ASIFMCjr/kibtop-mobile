import {StyleSheet} from 'react-native'

import {colors} from '@/constants/colors'
import {appFont} from '@/constants/fonts'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    marginLeft: 15,
    color: colors.dark,
    fontFamily: appFont.Bold,
  },
  itemsContainer: {
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})
