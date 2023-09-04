import {StyleSheet} from 'react-native'
import {colors} from '@/styles/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },
  titleStyle: {
    fontSize: 12,
    fontWeight: '400',
    marginVertical: 15,
  },
  dividerStyles: {
    marginTop: 5,
  },
  deleteAccountLabelStyle: {
    color: colors.red,
    opacity: 0.4,
  },
})
