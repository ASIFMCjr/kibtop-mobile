import {StyleSheet} from 'react-native'
import {colors} from '@/constants/colors'
import {padding, scaleSize} from '@/styles/mixins'
import {BORDER_RADIUS_10} from '@/styles/borders'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContentContainer: {
    paddingBottom: 100,
  },
  contentContainer: {
    backgroundColor: colors.white,
    borderTopLeftRadius: BORDER_RADIUS_10,
    borderTopRightRadius: BORDER_RADIUS_10,
    paddingHorizontal: 10,
    paddingTop: 10,
    width: '100%',
    height: '100%',
    top: scaleSize(-30),
  },
  productName: {
    fontSize: 24,
    fontWeight: '700',
    width: '50%',
  },
  productPrice: {
    fontSize: 32,
    fontWeight: '600',
    width: '50%',
    textAlign: 'right',
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: '600',
  },
  addressesContainer: {},
  containerTitle: {
    marginTop: 0,
  },
  addressesContainerLeft: {
    width: '50%',
  },
  addressesContainerRight: {
    width: '50%',
    alignItems: 'flex-end',
  },
  street: {
    fontSize: 16,
    fontWeight: '600',
  },
  city: {
    fontSize: 11,
    fontWeight: '400',
    color: colors.grayText,
  },
  distance: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '600',
    color: colors.grayText,
  },

  parameterContainer: {},
  parameterTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.grayText,
  },
  parameterValue: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: '600',
  },
  editAdBtn: {
    marginTop: 30,
    marginHorizontal: 0,
    backgroundColor: colors.brightGray,
  },

  analyticsContainer: {
    paddingTop: 30,
  },
  analyticsTitle: {
    fontSize: 24,
    fontWeight: '700',
  },
  analyticsBottomTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.grayText,
  },
  analyticsBottomValue: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
  },
  adBtnContainer: {
    marginTop: 30,
  },
  trashBtn: {
    // ...boxShadow(),
  },
  modalContainer: {},
  modalItem: {
    paddingHorizontal: 10,
    width: '100%',
    marginTop: 5,
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '600',
  },
  divider: {
    width: '95%',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  buttonContainer: {
    height: 30,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:100,
    top:25
  },
  slider:{
    bottom:20
  },
  likeButtonContainer:{
    
  }
})
