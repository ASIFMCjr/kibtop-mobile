import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {View} from 'react-native'
import commonStyles from '@/styles/commonStyles'
import {styles} from './styles'
import {useTranslation} from 'react-i18next'
import {useNavigation} from '@react-navigation/native'
import {RadioSelectListItem} from '@/components/Select/RadioSelect/components/ListItem'
import {Divider} from '@/components/Divider'
import {EUR, RUB, USD} from '@/constants/constants'
import {ContainerTitle} from '@/screens/Components/ContainerTitle'
import {useMst} from '@/store/RootStore'
import {observer} from 'mobx-react-lite'

const LanguageScreen = observer(() => {
  const {t} = useTranslation()
  const navigation = useNavigation()
  const {app} = useMst()

  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={styles.container}>
        <View>
          <ContainerTitle title={t('common:currency')} />
          <RadioSelectListItem
            title={`${EUR} Euro`}
            isSelected={app.currency === EUR}
            onPress={() => app.setCurrency(EUR)}
          />
          <Divider containerStyles={styles.dividerStyles} />
          <RadioSelectListItem
            title={`${USD} Dollar`}
            isSelected={app.currency === USD}
            onPress={() => app.setCurrency(USD)}
          />
          <Divider containerStyles={styles.dividerStyles} />
          <RadioSelectListItem
            title={`${RUB} Ruble`}
            isSelected={app.currency === RUB}
            onPress={() => app.setCurrency(RUB)}
          />
        </View>
        <View style={{paddingTop: 20}}>
          <ContainerTitle title={t('common:language')} />
          <RadioSelectListItem
            title={'English'}
            isSelected={app.language === 'en'}
            onPress={() => app.setLanguage('en')}
          />
          <Divider containerStyles={styles.dividerStyles} />
          <RadioSelectListItem
            title={'Türkçe'}
            isSelected={app.language === 'tr'}
            onPress={() => app.setLanguage('tr')}
          />
          <Divider containerStyles={styles.dividerStyles} />
          <RadioSelectListItem
            title={'Русский'}
            isSelected={app.language === 'ru'}
            onPress={() => app.setLanguage('ru')}
          />
        </View>
      </View>
    </SafeAreaView>
  )
})

export default LanguageScreen
