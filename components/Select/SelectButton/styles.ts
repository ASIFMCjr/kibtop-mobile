import {Dimensions, StyleSheet} from 'react-native'

import {colors} from '@/constants/colors'
import {appFont} from '@/constants/fonts'
import {shadowColor} from '@/utils/shadowColor'

const {width} = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    width: width - 30,
    height: 45,
    marginHorizontal: 15,
    borderRadius: 6.93,
    borderWidth: 1,
    borderColor: colors.lightGray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 10,
    backgroundColor: colors.white,
    elevation: 4,
    shadowColor: shadowColor('rgba(65, 64, 66, 0.05)'),
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      height: 4,
      width: 0,
    },
    marginBottom: 15,
  },
  title: {
    fontFamily: appFont.Semibold,
    fontSize: 16,
    letterSpacing: -0.5,
    color: colors.dark,
    flex: 1,
  },
  halfWidthContainer: {
    width: (width - 30 - 13) / 2,
    marginRight: -2,
    marginLeft: 15,
    marginHorizontal: 0,
  },
})
