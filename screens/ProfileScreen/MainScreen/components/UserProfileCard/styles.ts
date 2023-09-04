import {StyleSheet} from 'react-native'
import {boxShadow} from '@/styles/mixins'
import {colors} from '@/constants/colors'
import {BORDER_RADIUS_10, BORDER_RADIUS_20} from '@/styles/borders'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: BORDER_RADIUS_20,
    ...boxShadow(),
    marginTop: 50,
    alignItems: 'center',
  },
  leftContainer: {
    width: '30%',
    alignItems: 'center',
  },
  centerContainer: {
    width: '40%',
    alignItems: 'center',
  },
  rightContainer: {
    width: '30%',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  secondTitle: {
    fontSize: 12,
    fontWeight: '400',
  },
  smallBtnText: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.blue,
  },
  imgContainer: {
    height: 40,
    top: -40,
    alignItems: 'center',
    marginBottom: 10,
  },
  imgPlaceholder: {
    backgroundColor: colors.gray,
    borderRadius: 50,
    width: 80,
    height: 80,
  },
  localizationContainer: {
    padding: 8,
    borderRadius: BORDER_RADIUS_10,
    backgroundColor: colors.brightGray,
    marginTop: 10,
    marginBottom: 5,
  },
  localizationLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.semitransparentDark,
  },
  editProfileBtn: {
    width: '97%',
    borderRadius: BORDER_RADIUS_20,
    backgroundColor: colors.lightGray,
    paddingVertical: 10,
    marginVertical: 10,
  },
  editProfileLabel: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
})
