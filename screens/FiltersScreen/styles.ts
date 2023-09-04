import {colors} from '@/constants/colors'
import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  categoryFiltersContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})
