import {StyleSheet} from 'react-native'
import {colors} from '@/styles/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 0,
  },
  labelStyle: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 3,
  },
  dividerStyles: {
    marginHorizontal: 0,
  },
  deleteAccountLabelStyle: {
    color: colors.red,
    opacity: 0.4,
  },
})
