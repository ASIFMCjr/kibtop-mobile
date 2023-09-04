/**
 * This is style options for navigator screens
 */

import {SCALE_20} from '@/styles/spacing'
import {colors} from '@/styles/colors'

export const HEADER_NONE = {header: () => null}
export const HEADER_HEIGHT = 45
export const HEADER_WITH_RIGHT_BUTTON = {
  headerRightContainerStyle: {
    // paddingRight: SCALE_20,
  },
}
export const HEADER_WITH_LEFT_BUTTON = {
  headerLeftContainerStyle: {
    paddingLeft: SCALE_20,
  },
}
export const DEFAULT_HEADER = {

  headerStyle: {
    backgroundColor: colors.white,
  },
  headerTitleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerShadowVisible: false,
  headerBackTitleVisible: false,
  headerTintColor: colors.black,
}
export const TRANSPARENT_HEADER = {
  headerTransparent: true,
  headerTitleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerShadowVisible: true,
  headerBackTitleVisible: false,
  headerTintColor: colors.white,
}
