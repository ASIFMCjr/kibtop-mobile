import {Dimensions, StyleSheet} from 'react-native'

import {colors} from '@/constants/colors'
import {shadowColor} from '@/utils/shadowColor'
import { padding } from '@/styles/mixins'

const {width} = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    height: 140,
    width,
    backgroundColor: colors.white,
    shadowColor: shadowColor('rgba(65, 64, 66, 0.05)'),
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      height: 4,
      width: 0,
    },
    paddingLeft: 15,
    zIndex: 4,
    elevation: 4,
  },
  safeAreaView: {
    backgroundColor: colors.white,
  },
  searchLineContainer: {
    width: width - 30,
    flexDirection: 'row',
  },
  searchItems: {
    width: width,
    position: 'absolute',
    height: '100%',
  },
  underSearchLineContainer: {
    height: '300%',
    backgroundColor: colors.white,
    zIndex: 999,
    width: '100%',
    padding: 20,
    marginLeft: -10,
    fontSize: 24
  },
  underSearchLineContainerEl: {
    margin: 15,
  },
  searchblocks: {
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderWidth: 2,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
  },
  settingsButtonContainer: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  categoriesButtonsRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  scrollViewContainer: {
    paddingLeft: 15,
    paddingRight: 100,
    height: 75,
  },
  categoryButtonImage: {
    width: 45,
    height: 45,
  },
  gradient: {
    height: 75,
    width: 75,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
})