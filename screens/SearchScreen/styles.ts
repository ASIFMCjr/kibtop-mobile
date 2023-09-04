import {StyleSheet,Dimensions} from 'react-native'

import {colors} from '@/constants/colors'
import {appFont} from '@/constants/fonts'
import {shadowColor} from '@/utils/shadowColor'
const {width} = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  head: {
    width,
    height: 100,
    marginBottom: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: shadowColor('rgba(65, 64, 66, 0.05)'),
    elevation: 4,
  },
  filtersContainer: {
    width: '90%',
    marginLeft: 12,
    marginTop: 15,
    display:   'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  scrollView: {
    flex: 1,
  },
  adsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 100,
    justifyContent: 'space-evenly',
  },
  searchLineContainer: {
    flexDirection: 'row',
    paddingRight: 15,
    height: 45,
    alignItems: 'center',
  },
  backButtonContainer: {
    height: 30,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginLeft: 15,
    color: colors.dark,
    fontFamily: appFont.Bold,
  },
  itemsContainer: {
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  settingsButtonContainer: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
    paddingHorizontal: 15,
    marginTop: 10,
    flexWrap:  'wrap',
  },
  categoryIcon: {
    height: 50,
    width: 50,
  },
  
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
 

})
