import {StyleSheet} from 'react-native'
import {colors} from '@/styles/colors'
import {BORDER_RADIUS_20} from '@/styles/borders'
import {boxShadow, scaleSize} from '@/styles/mixins'
import commonStyles from '@/styles/commonStyles'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  bewareScamContainer: {
    width: '100%',
    backgroundColor: colors.brightGray,
    padding: 15,
    borderRadius: BORDER_RADIUS_20,
  },
  bewareScamText: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: '400',
  },
  chatIconContainer: {
    width: '100%',
    alignItems: 'center',
    paddingTop: scaleSize(80),
  },
  askContainer: {
    width: '100%',
    marginTop: 25,
    alignItems: 'center',
  },
  askText: {
    width: '85%',
    ...commonStyles.textCenter,
    fontSize: 14,
    fontWeight: '400',
    marginTop: 15,
  },
  bottomContainer: {
    backgroundColor: colors.white,
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    ...boxShadow('#000', 11),
  },
})
