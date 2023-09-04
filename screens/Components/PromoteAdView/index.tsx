import React, {useState} from 'react'
import {Image, StyleProp, Text, View, ViewStyle} from 'react-native'
import {styles} from './styles'
import LinearGradient from 'react-native-linear-gradient'
import {useTranslation} from 'react-i18next'
import Question from '@/assets/icons/question.svg'
import Checked from '@/assets/icons/checked.svg'
import commonStyles from '@/styles/commonStyles'
import {Button} from '@/components/Button'
import {EUR} from '@/constants/constants'
import {ContainerTitle} from '@/screens/Components/ContainerTitle'
import {CheckboxSelectListItem} from '@/components/Select/CheckboxSelect/components/ListItem'
import {colors} from '@/styles/colors'
import {Divider} from '@/components/Divider'

interface PromoteAdViewProps {
  containerStyles?: StyleProp<ViewStyle>
}

const PromoteAdView = ({containerStyles}: PromoteAdViewProps) => {
  const {t} = useTranslation()
  const [isSelected, setSelected] = useState(true)

  const handleSelectItem = () => {
    setSelected(!isSelected)
  }
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1.2, y: 0}}
        colors={['#FDDB92', '#D1FDFF']}
        style={[styles.gradient, containerStyles]}>
        <View style={styles.topContainer}>
          <View style={styles.imgContainer}>
            <Image
              source={require('@/assets/icons/funnel.png')}
              style={styles.img}
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{t('promoteAd:title')}</Text>
            <Text style={styles.text}>{t('promoteAd:text')}</Text>
          </View>
        </View>
        <View>
          <ContainerTitle title={t('promoteAd:serviceSets')} />
          <PriceViewItem
            title={t('promoteAd:easyStart')}
            items={[t('promoteAd:topAd3')]}
            price={'4.9'}
          />
          <PriceViewItem
            title={t('promoteAd:quickSale')}
            items={[t('promoteAd:topAd3'), t('promoteAd:lifts3')]}
            price={'4.9'}
          />
          <PriceViewItem
            title={t('promoteAd:turboSale')}
            items={[
              t('promoteAd:topAd3'),
              t('promoteAd:lifts9'),
              t('promoteAd:vipAd7'),
            ]}
            price={'4.9'}
          />
        </View>
        <View>
          <ContainerTitle title={t('promoteAd:separateServices')} />
          <CheckBoxItem
            title={t('promoteAd:topAd3')}
            isChecked={isSelected}
            price={'8'}
            onSelectItem={handleSelectItem}
          />
          <CheckBoxItem
            title={t('promoteAd:topAd30')}
            isChecked={isSelected}
            price={'25'}
            onSelectItem={handleSelectItem}
          />
          <CheckBoxItem
            title={t('promoteAd:lifts9')}
            isChecked={isSelected}
            price={'10'}
            onSelectItem={handleSelectItem}
          />
          <CheckBoxItem
            title={t('promoteAd:vipAd7')}
            isChecked={isSelected}
            price={'30'}
            onSelectItem={handleSelectItem}
          />
        </View>
        <Divider
          containerStyles={{backgroundColor: colors.semitransparentDark}}
        />
        <View style={[commonStyles.row, commonStyles.alignItemsCenter]}>
          <Button
            title={t('promoteAd:enable')}
            containerStyles={styles.btnContainer}
          />
          <Text style={{color: colors.blue, fontWeight: '600'}}>
            {t('promoteAd:total')}: {EUR}73
          </Text>
        </View>
      </LinearGradient>
    </View>
  )
}

export default PromoteAdView

interface PriceViewItemProps {
  title: string
  items: string[]
  price: string
}

const PriceViewItem = ({title, items, price}: PriceViewItemProps) => {
  const {t} = useTranslation()
  return (
    <View style={styles.priceContainer}>
      <View style={[commonStyles.row, commonStyles.justifyContentBetween]}>
        <Text style={styles.priceTitle}>{title}</Text>
        <Question />
      </View>
      <View style={styles.textItemContainer}>
        {items.map((text: string) => (
          <View style={[commonStyles.row, commonStyles.alignItemsCenter]}>
            <Checked />
            <Text style={styles.textItem}>{text}</Text>
          </View>
        ))}
      </View>
      <View style={styles.bottomContainer}>
        <Button
          title={t('promoteAd:enable')}
          containerStyles={styles.btnContainer}
        />
        <Text style={styles.priceText}>
          {t('promoteAd:for')} {EUR} {price}
        </Text>
      </View>
    </View>
  )
}

const Dot = () => (
  <View
    style={{
      paddingHorizontal: 5,
      overflow: 'hidden',
    }}>
    <Text style={{color: colors.semitransparentDark}}>
      .................................................
    </Text>
  </View>
)

interface CheckBoxItemProps {
  title: string
  price: string
  isChecked: boolean
  onSelectItem: () => void
}

const CheckBoxItem = ({
  title,
  price,
  isChecked,
  onSelectItem,
}: CheckBoxItemProps) => {
  const {t} = useTranslation()
  return (
    <View
      style={[
        commonStyles.row,
        commonStyles.alignItemsCenter,
        {width: '100%'},
      ]}>
      <View
        style={[
          commonStyles.row,
          commonStyles.alignItemsCenter,
          {width: '85%', overflow: 'hidden'},
        ]}>
        <CheckboxSelectListItem
          onPress={onSelectItem}
          isChecked={isChecked}
          title={title}
          containerStyles={{paddingHorizontal: 0}}
        />
        <Dot />
      </View>
      <View style={[{width: '15%'}]}>
        <Text
          style={{
            textAlign: 'center',
            color: colors.semitransparentDark,
            fontWeight: '600',
          }}>
          {t('promoteAd:for')} {EUR}
          {price}
        </Text>
      </View>
    </View>
  )
}
