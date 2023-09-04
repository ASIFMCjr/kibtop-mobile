import {applySnapshot, flow, types} from 'mobx-state-tree'
import {Alert} from 'react-native'
import AuthService from '@/services/AuthService'
import {validateEmail} from '@/utils/validation'
import AccountService from '@/services/AccountService'

type LoginResponseType = {
  access: string
  refresh: string
}

const TokenModel = types.model({
  access_token: types.optional(types.string, ''),
  refresh_token: types.optional(types.string, ''),
})

export const User = types
  .model({
    id: types.maybeNull(types.number),
    username: types.optional(types.string, ''),
    firstName: types.optional(types.string, ''),
    lastName: types.optional(types.string, ''),
    middleName: types.optional(types.string, ''),
    email: types.maybeNull(types.string),
    phone: types.maybeNull(types.string),
    password: types.optional(types.string, ''),
    password2: types.optional(types.string, ''),
    passwordError: types.optional(types.boolean, false),
    emailError: types.optional(types.boolean, false),
    avatarUri: types.maybeNull(types.string),
    address: types.maybeNull(types.string),
    deals: types.maybeNull(types.number),
    isLoading: types.optional(types.boolean, false),
    token: types.optional(TokenModel, {}),
  })
  .views(self => ({
    get isAuthenticated() {
      return !!self.token.access_token
    },
  }))
  .actions(self => {
    const setFirstName = (firstName: string) => {
      self.firstName = firstName
    }
    const setUsername = (username: string) => {
      self.username = username
    }
    const setLastName = (lastName: string) => {
      self.lastName = lastName
    }
    const setEmail = (email: string) => {
      self.email = email
      if (email.length > 0) {
        self.emailError = !validateEmail(email)
      }
    }
    const setAddress = (address: string) => {
      self.address = address
    }
    const setPassword = (password: string) => {
      self.password = password
    }
    const setPassword2 = (password: string) => {
      self.password2 = password
      if (self.password && self.password.length > 0) {
        self.passwordError = self.password !== self.password2
      }
    }
    const setAvatarUri = (uri: string) => {
      self.avatarUri = uri
    }

    const setPhone = (phone: string) => {
      self.phone = phone
    }

    const setId = (id: number) => {
      self.id = id
    }

    const setDeals = (deals: number) => {
      self.deals = deals
    }

    const setToken = (access_token: string, refresh_token: string) => {
      self.token.access_token = access_token
      self.token.refresh_token = refresh_token
    }



    const signup = flow(function* () {
      try {
        self.isLoading = true
        self.email && setUsername(self.email.replace('@', '_'))
        const data = {
          username: self.username,
          first_name: self.firstName,
          email: self.email,
          password: self.password,
          re_password: self.password2,
          addres: self.address,
          upload_user: self.avatarUri,
        }
        yield AuthService.signup(data)
      } catch (error) {
        console.log('error on signup', JSON.stringify(error))
        Alert.alert('Error', error?.message)
      } finally {
        self.isLoading = false
      }
    })
    const login = flow(function* () {
      try {
        self.isLoading = true
        const data = {
          username: self.username,
          password: self.password,
        }
        const response = yield AuthService.login(data)
        const {access, refresh}: LoginResponseType = response.data
        self.token.access_token = access
        self.token.refresh_token = refresh
      } catch (error) {
        console.log('error on login', JSON.stringify(error))
        Alert.alert('Error', error?.message)
      } finally {
        self.isLoading = false
      }
    })

    const me = flow(function* () {
      try {
        self.isLoading = true
        const {data} = yield AccountService.me()
        self.id = data.id
        self.address = data.addres
        self.firstName = data.first_name
        self.lastName = data.last_name
        self.phone = data.phone
        self.email = data.email
        self.avatarUri = data.upload_user
        self.deals = data.deals
        console.log('id', self.id)
      } catch (error) {
        console.error('error on get user', error)
      } finally {
        self.isLoading = false
      }
    })

    const update = flow(function* update() {
      try {
        self.isLoading = true
        const userData = {
          id: self.id,
          email: self.email,
          first_name: self.firstName,
          phone: self.phone,
          addres: self.address,
          upload_user: self.avatarUri,
          deals: self.deals,
        }
        yield AccountService.update(userData)
      } catch (error) {
        console.error('error on user update', JSON.stringify(error))
      } finally {
        yield me()
        self.isLoading = false
      }
    })

    const reset = flow(function* () {
      try {
        applySnapshot(self, {
          firstName: '',
          lastName: '',
          middleName: '',
          email: null,
          password: '',
          password2: '',
          address: null,
          emailError: false,
          passwordError: false,
          avatarUri: null,
          phone: null,
          id: null,
          token: {access_token: '', refresh_token: ''},
        })
      } catch (error: any) {
        Alert.alert('Ошибка', error.response.data.message)
      }
    })

    return {
      signup,
      login,
      me,
      update,
      reset,
      setFirstName,
      setUsername,
      setLastName,
      setEmail,
      setAddress,
      setPassword,
      setPassword2,
      setAvatarUri,
      setPhone,
      setToken,
      setId,
      setDeals,
    }
  })
