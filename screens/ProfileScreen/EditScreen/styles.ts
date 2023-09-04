import {StyleSheet} from 'react-native'
import {colors} from '@/constants/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    backgroundColor: colors.lightGray,
    padding: 25,
    borderRadius: 100,
  },
  addPhotoTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  inputPhotoAvatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    resizeMode: 'cover',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    flexDirection: 'row',
    marginVertical: 5,
    borderRadius: 8,
  },
})
