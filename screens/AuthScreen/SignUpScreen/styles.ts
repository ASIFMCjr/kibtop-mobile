import {Dimensions, StyleSheet} from 'react-native'
import {colors} from '@/constants/colors'
const {height} = Dimensions.get('screen')

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
  nextButton: {
    position: 'absolute', 
    top: height - 205,
  },
  forgotPassword: {
    color: colors.grayText,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'right',
    marginRight: 20,
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: '600',
    textAlign: 'left',
    marginLeft: 15,
    marginTop: -10,
  },
  iconContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  iconStyle: {
    backgroundColor: colors.lightGray,
    padding: 40,
    borderRadius: 100,
  },
  addPhotoTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    color: colors.blue,
  },
  completeRegisterTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
  },
  completeRegisterDesc: {
    textAlign: 'center',
  },
  useLocationBtn: {
    color: colors.grayText,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'right',
    marginRight: 20,
  },
  inputPhotoAvatar: {
    width: 140,
    height: 140,
    borderRadius: 100,
    resizeMode: 'cover',
  },
})
