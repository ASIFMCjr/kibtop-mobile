import {Dimensions, StyleSheet} from 'react-native'

import {colors} from '@/constants/colors'

import {shadowColor} from '@/utils/shadowColor'
import {appFont} from '@/constants/fonts'

const {width} = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    width,
    height: 135,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: shadowColor('rgba(65, 64, 66, 0.05)'),
    elevation: 4,
  },
  safeAreaView: {
    backgroundColor: colors.white,
  },
  searchLineContainer: {
    flexDirection: 'row',
    paddingRight: 15,
    height: 45,
    alignItems: 'center',
  },
  backButtonContainer: {
    height: 30,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    paddingHorizontal: 15,
    marginTop: 23,
  },
  categoryIcon: {
    height: 50,
    width: 50,
  },
  title: {
    fontFamily: appFont.Bold,
    fontSize: 24,
    color: colors.dark,
    marginLeft: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filtersContainer: {
    height: 50,
    justifyContent: 'space-between',
  },
})
