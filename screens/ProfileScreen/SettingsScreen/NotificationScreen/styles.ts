import {StyleSheet} from 'react-native'
import {colors} from '@/styles/colors'
import commonStyles from '@/styles/commonStyles'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  itemContainer: {
    ...commonStyles.row,
    ...commonStyles.alignItemsCenter,
    ...commonStyles.justifyContentBetween,
    marginVertical: 5,
    paddingBottom: 10,
  },
})
