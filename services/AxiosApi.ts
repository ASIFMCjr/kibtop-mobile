import axios, {AxiosError, AxiosInstance} from 'axios'
import {BASE_URL} from '@/config'
import {createNavigationContainerRef} from '@react-navigation/native'
import {rootStore} from '@/store/RootStore'

const AxiosAPI: AxiosInstance = axios.create({
  baseURL: BASE_URL,
})

AxiosAPI.interceptors.request.use(
  async request => {
    // @ts-ignore
    request.headers.Authorization = `Bearer ${rootStore.user.token.access_token}`
    console.log('error use', request)
    return request
  },
  error => {
    return Promise.reject(error)
  },
)
export const navigationRef = createNavigationContainerRef()

const handleError = async (error: AxiosError): Promise<AxiosError> => {
  await rootStore.user.reset()
  return Promise.reject(error)
}

const refreshToken = async () => {
  try {
    const response = await axios.post(`${BASE_URL}v1/auth/jwt/refresh/`, {
      refresh: rootStore.user.token.refresh_token,
    })
    const {access, refresh} = response.data
    rootStore.user.setToken(access, refresh)
  } catch (e: any) {
    handleError(e)
    console.error('refreshToken error', e)
  }
}

// Response interceptor for API calls
AxiosAPI.interceptors.response.use(
  response => {
    return response
  },
  async error => {
    const originalRequest = error.config
    // console.log('error response status', error.response)
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      await refreshToken()
      return AxiosAPI(originalRequest)
    }
    return Promise.reject(error)
  },
)

export default AxiosAPI
