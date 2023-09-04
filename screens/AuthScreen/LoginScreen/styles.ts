import {StyleSheet} from 'react-native'
import {colors} from '@/constants/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  welcomeTextStyle: {
    fontSize: 40,
    color: colors.dark,
  },
  inputContainer: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    paddingHorizontal: 15,
  },
  forgotPassword: {
    color: colors.grayText,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'right',
    marginRight: 20,
  },
})
