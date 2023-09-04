import {Dimensions, StyleSheet} from 'react-native'

import {colors} from '@/constants/colors'
import {appFont} from '@/constants/fonts'
import {scaleSize} from '@/styles/mixins'

const {width} = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    width: width / 2 - 24,
    marginTop: 26,
    marginLeft:15,


  },
  imageBlock: {
    width: width / 2 - 24,
    height: width / 2 - 24,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    marginBottom: 2,

  },
  imageBlockMask: {
    width: width / 2 - 24,
    height: width / 2 - 24,
    backgroundColor: colors.white,
    opacity: 0.4,
    borderRadius: 20,
    marginBottom: 2,
    
  },
  title: {
    fontSize: 15,
    color: colors.dark,
    height: 20,
    flex: 1,
    fontFamily: appFont.Semibold,
    lineHeight: 27,
  },
  price: {
    fontSize: 20,
    textAlign: 'right',
    letterSpacing: -0.5,
    color: colors.dark,
    fontFamily: appFont.Bold,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 6,
    height: 22,

  },
  subtitle: {
    fontSize: 11,
    color: colors.dark,
    opacity: 0.4,
    fontFamily: appFont.Regular,
  },

  subtitle2: {
    fontSize: 11,
    color: colors.dark,
    opacity: 0.4,
    fontFamily: appFont.Regular,    
  },

  likeButtonContainer: {
    height: 30,
    width: 30,
    position: 'absolute',
    top: 4,
    right: 6,
  },
  likeIcon: {
    width: scaleSize(25),
    height: scaleSize(25),
    resizeMode: 'contain',
  },
  pricePrefix: {
    fontSize: 12,
    letterSpacing: -0.5,
    color: colors.semitransparentDark,
    fontFamily: appFont.Bold,
  },
})
