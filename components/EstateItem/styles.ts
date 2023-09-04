import {Dimensions, StyleSheet} from 'react-native'

import {colors} from '@/constants/colors'
import {appFont} from '@/constants/fonts'

const {width} = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    width,
    marginTop: 27,
  },
  flatListContainer: {
    paddingHorizontal: 10,
  },
  header: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-between',
    height: 20,
  },
  title: {
    fontSize: 16,
    letterSpacing: -0.5,
    color: colors.dark,
    fontFamily: appFont.Semibold,
  },
  divider: {
    width: 1,
    height: 25,
    backgroundColor: colors.lightGray,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  subtitle: {
    fontSize: 11,
    lineHeight: 11,
    letterSpacing: -0.5,
    textAlign: 'left',
    opacity: 0.4,
    color: colors.dark,
    marginTop: 5,
    fontFamily: appFont.Regular,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 15,
  },
  price: {
    fontSize: 20,
    letterSpacing: -0.5,
    textAlign: 'right',
    lineHeight: 20,
    color: colors.dark,
    fontFamily: appFont.Bold,
  },
  pricePrefix: {
    fontSize: 12,
    color: colors.semitransparentDark,
  },
  likeIcon: {
    width: 30,
    height: 30,
  },
})
