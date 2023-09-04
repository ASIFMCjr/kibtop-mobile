import axios from 'axios'
import {BASE_URL} from '@/config'

interface SignupParams {
  username: string
  email: string | null
  phone?: string
  first_name?: string
  last_name?: string
  middle_name?: string
  addres?: string | null
  password: string
  re_password: string
  upload_user: string | null
}
interface LoginParams {
  username: string
  password: string
}

const AuthService = {
  signup(params: SignupParams) {
    try {
      const data = new FormData()
      if (params.upload_user) {
        data.append('upload_user', {
          uri: params.upload_user,
          type: 'image/jpg',
          name: 'name.jpg',
        })
      }
      data.append('username', params.username)
      data.append('first_name', params.first_name)
      data.append('email', params.email)
      data.append('phone', null)
      data.append('password', params.password)
      data.append('re_password', params.re_password)
      data.append('addres', params.addres || '')
      console.log('form data', data)
      return axios.post(`${BASE_URL}v1/auth/users/`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    } catch (e) {
      console.log('error login', e)
    }
  },
  login(loginData: LoginParams) {
    try {
      return axios.post(`${BASE_URL}v1/auth/jwt/create/`, loginData)
    } catch (e) {
      console.log('error login', e)
    }
  },
}

export default AuthService
