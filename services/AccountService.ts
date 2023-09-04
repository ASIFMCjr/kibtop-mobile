import {BASE_URL} from '@/config'
import AxiosAPI from '@/services/AxiosApi'

interface UpdateParams {
  phone: string | null
  email: string | null
  first_name: string | null
  addres: string | null
  upload_user: string | null
  deals: number | null
}
interface MyAdsParams {
  userId: number
  language: string
}

const AccountService = {
  me() {
    try {
      return AxiosAPI.get(`${BASE_URL}v1/auth/users/me/`)
    } catch (e) {
      console.log('error me', e)
    }
  },
  myAds(params: MyAdsParams) {
    try {
      return AxiosAPI.get(
        `${BASE_URL}v1/my_ads/?user_id=${params.userId}&lang=${params.language}`,
      )
    } catch (e) {
      console.log('error me', e)
    }
  },
  update(params: UpdateParams) {
    try {
      const data = new FormData()
      if (params.upload_user) {
        if (!containsHTTP(params.upload_user)) {
          // @ts-ignore
          const filename = params.upload_user?.split('/').pop().slice(0, -4)
          data.append('upload_user', {
            uri: params.upload_user,
            type: 'image/jpg',
            name: filename,
          })
        }
      }
      data.append('email', params.email)
      data.append('first_name', params.first_name)
      data.append('addres', params.addres || '')
      data.append('phone', params.phone)
      data.append('deals', params.deals)
      console.log('params', JSON.stringify(data))
      return AxiosAPI.patch(`${BASE_URL}v1/auth/users/me/`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    } catch (e) {
      console.log('error update', e)
    }
  },
}

export default AccountService

function containsHTTP(str: string | null) {
  if (str === null) {
    return false
  }
  return str.includes('http://') || str.includes('https://')
}
