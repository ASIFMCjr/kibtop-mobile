import {StyleSheet} from 'react-native'
import {colors} from '@/styles/colors'
import {BORDER_RADIUS_20} from '@/styles/borders'
import {boxShadow} from '@/styles/mixins'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '100%',
    padding: 7,
    ...boxShadow(),
    borderRadius: BORDER_RADIUS_20,
    marginVertical: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  linearGradient: {
    padding: 15,
    borderRadius: BORDER_RADIUS_20,
  },
})
