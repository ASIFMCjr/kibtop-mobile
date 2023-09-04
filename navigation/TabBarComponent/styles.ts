import {Dimensions, StyleSheet} from 'react-native'

import {colors} from '@/constants/colors'
import {appFont} from '@/constants/fonts'
import {isTablet} from '@/utils/isTablet'

const {width} = Dimensions.get('screen')
const {height} = Dimensions.get('screen')

export default StyleSheet.create({
  wrapper: {
    width,
    backgroundColor: colors.transparent,
    flexDirection: 'row',
    height: 90,
    justifyContent: 'space-between',
    position: 'absolute',
    top: height - 132,
  },
  hide: {
    display: 'none'
  },
  safeAreaView: {
    backgroundColor: colors.white,
  },
  sideContainer: {
    width: width / 2 - 50,
    height: 90,
    flexDirection: 'row',
    paddingTop: 13,
    paddingBottom: 27,
    justifyContent: isTablet() ? 'space-evenly' : 'space-between',
  },
  leftSideContainer: {
    paddingLeft: '4%',
    paddingRight: 20,
  },
  rightSideContainer: {
    paddingLeft: 20,
    paddingRight: '4%',
  },
  middleSectionButton: {
    position: 'absolute',
    bottom: 27,
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    left: width / 2 - 45,
    zIndex: -2,
  },
  middleSection: {
    position: 'absolute',
    bottom: -2.5,
    width: 90,
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    left: width / 2 - 45,
    zIndex: 1,
  },
  addAdvertText: {
    position: 'absolute',
    bottom: 20,
    left: width / 2 - 31,
    zIndex: 10,
    fontSize: 11,
    color: colors.dark,
    fontFamily: appFont.Semibold,
  },
  corner: {
    height: 83,
    width: 17,
    resizeMode: 'contain',
    marginBottom: 7,
  },
  bottomCover: {
    backgroundColor: '#FFFFFF',
    width,
    height: 8,
    position: 'absolute',
    bottom: 0,
  },
})
