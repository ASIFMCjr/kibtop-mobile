import {StyleSheet} from 'react-native'

import {colors} from '@/constants/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  filtersContainer: {
    width: '100%',
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  scrollView: {
    flex: 1,
  },
  adsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 100,
    justifyContent: 'space-evenly',
  },
})
