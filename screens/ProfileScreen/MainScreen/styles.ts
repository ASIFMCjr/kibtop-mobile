import {colors} from '@/constants/colors'
import { Row } from 'react-bootstrap'
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  titleContainer: {
    paddingTop: 40,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  sndTitle: {
    fontWeight: '400',
    fontSize: 12,
    color: colors.semitransparentDark,
  },


advertform: {
  marginBottom:50
  
},
})