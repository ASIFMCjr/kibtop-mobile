import {Dimensions, PixelRatio, Platform} from 'react-native'

const WINDOW_WIDTH = Dimensions.get('window').width
const guidelineBaseWidth = 375

export const scaleSize = (size: number) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size

export const scaleFont = (size: number) => size * PixelRatio.getFontScale()

function dimensions(
  top: number,
  right = top,
  bottom = top,
  left = right,
  property,
) {
  let styles = {}

  styles[`${property}Top`] = top
  styles[`${property}Right`] = right
  styles[`${property}Bottom`] = bottom
  styles[`${property}Left`] = left

  return styles
}

export function margin(
  top: number,
  right: number,
  bottom: number,
  left: number,
) {
  return dimensions(top, right, bottom, left, 'margin')
}

export function padding(
  top: number,
  right: number,
  bottom: number,
  left: number,
) {
  return dimensions(top, right, bottom, left, 'padding')
}

export const DEVICE_WIDTH = Dimensions.get('window').width
export const DEVICE_HEIGHT = Dimensions.get('window').height
export const isIOS = Platform.OS === 'ios'
export const isAndroid = Platform.OS === 'android'

export function boxShadow(
  color = '#878787',
  radius = 6,
  offset = {height: 3, width: 0},
  opacity = 0.2,
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  }
}
