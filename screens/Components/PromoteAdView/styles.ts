import {StyleSheet} from 'react-native'
import {DEVICE_WIDTH, scaleSize} from '@/styles/mixins'
import {colors} from '@/styles/colors'
import {BORDER_RADIUS_20} from '@/styles/borders'

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  gradient: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    padding: 15,
  },
  topContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  imgContainer: {
    width: '40%',
  },
  img: {
    left: scaleSize(-10),
    width: DEVICE_WIDTH / 2.7,
    pixelRatio: 1,
  },
  titleContainer: {
    paddingTop: 40,
    paddingLeft: 10,
    width: '60%',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.dark,
  },
  text: {
    marginTop: 5,
    width: '80%',
    fontWeight: '400',
    fontSize: 14,
    color: colors.dark,
  },

  priceContainer: {
    width: '100%',
    borderRadius: BORDER_RADIUS_20,
    padding: scaleSize(15),
    backgroundColor: colors.white,
    marginBottom: 15,
  },
  priceTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  textItemContainer: {
    paddingTop: 10,
  },
  textItem: {
    marginLeft: 5,
    marginVertical: 3,
    fontSize: 14,
    fontWeight: '400',
  },
  bottomContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnContainer: {
    marginLeft: 0,
    width: '40%',
  },
  priceText: {
    color: colors.blue,
    opacity: 0.6,
    fontWeight: '600',
    fontSize: 14,
  },
})
