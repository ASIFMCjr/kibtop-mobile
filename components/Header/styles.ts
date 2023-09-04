import {Dimensions, StyleSheet} from 'react-native'

import {colors} from '@/constants/colors'
import {appFont} from '@/constants/fonts'

const {width} = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    width,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    color: colors.dark,
    fontFamily: appFont.Bold,
    letterSpacing: -0.5,
    fontSize: 24,
  },
  buttonContainer: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
