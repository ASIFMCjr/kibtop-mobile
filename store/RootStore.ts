import {createContext, useContext} from 'react'
import {Instance, types} from 'mobx-state-tree'
import {User} from '@/store/UserStore'
import persist from 'mst-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {App} from '@/store/AppStore'
import {USD} from '@/constants/constants'

const RootStore = types.model({
  user: User,
  app: App,
})

let initialState = RootStore.create({
  user: {
    id: null,
  },
  app: {
    language: 'en',
    currency: USD,
  },
})

export const rootStore = initialState

persist('user', initialState.user, {
  storage: AsyncStorage,
  jsonify: true,
}).then(async () => {})
persist('app', initialState.app, {
  storage: AsyncStorage,
  jsonify: true,
}).then(async () => {})

export type RootInstance = Instance<typeof RootStore>
const RootStoreContext = createContext<null | RootInstance>(null)
export const Provider = RootStoreContext.Provider

export function useMst() {
  const store = useContext(RootStoreContext)
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider')
  }
  return store
}
