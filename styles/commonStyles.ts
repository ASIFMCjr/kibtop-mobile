import {Dimensions, Platform, StyleSheet} from 'react-native'
import {FONT_SIZE_12} from './typography'
import {SCALE_10, SCALE_16, SCALE_20} from './spacing'
import {scaleSize} from './mixins'
import {BORDER_RADIUS_6} from './borders'
import {colors} from '@/styles/colors'

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  containerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  buttonContainer: {
    paddingVertical: SCALE_20,
    paddingHorizontal: SCALE_16,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  textCenter: {
    textAlign: 'center',
  },
  addItem: {
    paddingHorizontal: SCALE_10,
    backgroundColor: '#fff',
    paddingTop: SCALE_10,
    paddingBottom: scaleSize(30),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    borderRadius: BORDER_RADIUS_6,
  },
  noText: {
    marginTop: SCALE_20,
    textAlign: 'center',
    fontSize: FONT_SIZE_12,
  },
  listBottomPadding: {
    paddingBottom: scaleSize(140),
  },
  row: {
    flexDirection: 'row',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  justifyContentBetween: {
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column',
  },
  bottomContainer: {
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width,
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 15 : 5,
    alignItems: 'center',
  },
  iconSize: {
    width: 30,
    height: 30,
  },
})
export default commonStyles
