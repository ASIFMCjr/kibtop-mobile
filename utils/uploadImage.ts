import {PERMISSIONS, request} from 'react-native-permissions'
import * as ImagePicker from 'react-native-image-picker'
import {
  CameraOptions,
  ImageLibraryOptions,
} from 'react-native-image-picker/src/types'

const Camera: CameraOptions = {
  saveToPhotos: true,
  mediaType: 'photo',
  includeBase64: false,
  maxHeight: 600,
  maxWidth: 600,
}

const ImageLibrary: ImageLibraryOptions = {
  selectionLimit: 1,
  mediaType: 'photo',
  includeBase64: false,
  maxHeight: 600,
  maxWidth: 600,
}

const uploadImage = async (isCamera: boolean) => {
  await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
  try {
    let result
    if (isCamera) {
      result = await ImagePicker.launchCamera(isCamera ? Camera : ImageLibrary)
    } else {
      result = await ImagePicker.launchImageLibrary(
        isCamera ? Camera : ImageLibrary,
      )
    }
    if (result?.assets) {
      return result.assets[0].uri
    }
  } catch (e) {
    console.error('err onCameraPress', e)
  }
}

export default uploadImage
