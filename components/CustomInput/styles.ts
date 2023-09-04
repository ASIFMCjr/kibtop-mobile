import {Dimensions, StyleSheet} from 'react-native'

import {colors} from '@/constants/colors'
import {appFont} from '@/constants/fonts'

const {width} = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    height: 45,
    flex: 1,
    backgroundColor: colors.brightGray,
    borderRadius: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  input: {
    flex: 1,
    marginLeft: 13,
    fontSize: 16,
    lineHeight: 20,
    color: colors.dark,
    fontFamily: appFont.Semibold,
    textAlignVertical: 'top',
  },
  sqaredContainer: {
    borderRadius: 8.91,
  },
  halfWidthContainer: {
    width: (width - 30 - 16) / 2,
    marginHorizontal: 8,
    borderWidth: 0,
  },
  errorMessage: {
    color: colors.red,
    fontWeight: '400',
    marginTop: 10,
    marginLeft: 5,
  },
  hasErrorContainer: {
    borderColor: colors.red,
  },
})
