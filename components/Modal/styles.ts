import {StyleSheet} from 'react-native'
import {colors} from '@/constants/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  modalHeaderContainer: {},
  modalHeaderTitle: {
    color: colors.black,
    fontWeight: '600',
    fontSize: 16,
  },
  btnContainer: {
    position: 'absolute',
    bottom: 10,
  },
})
