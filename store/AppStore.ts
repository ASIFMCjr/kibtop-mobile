import {types} from 'mobx-state-tree'
import {EUR, RUB, USD} from '@/constants/constants'
import i18next from 'i18next'

export type LanguageType = 'en' | 'tr' | 'ru'
export type CurrencyType = typeof USD | typeof EUR | typeof RUB
export const App = types
  .model({
    language: types.enumeration('Language', ['en', 'tr', 'ru']),
    currency: types.enumeration('Currency', [USD, EUR, RUB]),
  })
  .actions(self => {
    const setLanguage = (language: LanguageType) => {
      self.language = language
      i18next.changeLanguage(language)
    }
    const setCurrency = (currency: CurrencyType) => {
      self.currency = currency
    }
    return {
      setLanguage,
      setCurrency,
    }
  })
