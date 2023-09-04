import {Dimensions, StyleSheet} from 'react-native'

import {colors} from '@/constants/colors'
import {appFont} from '@/constants/fonts'

const {width} = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    height: 171,
    width: width - 60,
    marginHorizontal: 7.5,
    backgroundColor: colors.gray,
    borderRadius: 20,
    //paddingLeft: width / 2 - 60,
    justifyContent: 'center',
    

  },
  title: {
    width: 145,
    fontSize: 22,
    marginTop:40,
    color: colors.dark,
    fontFamily: appFont.Semibold,
    marginBottom:5,
  },
  description: {
    width: 145,
    fontSize: 14,
    color: colors.dark,
    marginBottom:10,
    fontFamily: appFont.Regular,
  },
  moreButtonContainer: {
    flexDirection: 'row',
  },
  moreButtonTitle: {
    fontSize: 12,
    letterSpacing: 2.59,
    marginRight: 5,
    color: colors.dark,
    fontFamily: appFont.Regular,
  },
  icon:{
    height: 130,
    width:  130,
    marginRight:20,
    marginLeft:10,
    marginTop:90

  },
  column:{
    flexDirection: 'row',
  },

})
