import React from 'react'
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {BottomTabBarProps} from '@react-navigation/bottom-tabs'

import {TabBarComponentTabButton} from './components/TabButton'

import styles from './styles'

export const TabBarComponent: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {

  const buttons = state.routes.slice(0, 4).map((route, index) => {
    const {options} = descriptors[route.key]

    const title = options.title || 'Not defined'
    const Icon = options.tabBarIcon
    const isFocused = state.index === index

    function onPress() {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      })

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name)
      }
    }

    function onLongPress() {
      navigation.emit({
        type: 'tabLongPress',
        target: route.key,
      })
    }

    return (
      <TabBarComponentTabButton
        title={title}
        isFocused={isFocused}
        onLongPress={onLongPress}
        onPress={onPress}
        icon={Icon?.({focused: isFocused, size: 30, color: ''})}
      />
    )
  })

  return (
    <View style={styles.wrapper}>
      <View style={{flexDirection: 'row', height: 90}}>
        <Image
          source={require('@/assets/icons/tabBarLeftCorner.png')}
          style={styles.corner}
        />
        <ImageBackground
          source={require('@/assets/icons/tabBarCover.png')}
          style={[styles.sideContainer, styles.leftSideContainer]}
          resizeMode="stretch">
          {buttons.slice(0, 2)}
        </ImageBackground>
      </View>
      <View style={{flexDirection: 'row'}}>
        <ImageBackground
          source={require('@/assets/icons/tabBarCoverRight.png')}
          style={[styles.sideContainer, styles.rightSideContainer]}
          resizeMode="stretch">
          {buttons.slice(2, 4)}
        </ImageBackground>
        <Image
          source={require('@/assets/icons/tabBarRightCorner.png')}
          style={styles.corner}
        />
      </View>
      <View style={styles.middleSection} pointerEvents="none">
        <Image
          source={require('@/assets/icons/tabBarMiddleSection.png')}
          style={{
            width: 90,
            height: 85,
          }}
        />
      </View>
      <TouchableOpacity style={styles.middleSectionButton}onPress={() => {navigation.navigate('CategoriesListScreen');
      }}>
        <Image
          style={{width: 90, height: 90}}
          source={require('@/assets/icons/tabBarMiddleSectionButton.png')}
        />
      </TouchableOpacity>
      <Text style={styles.addAdvertText}>Add advert</Text>
      <View style={styles.bottomCover} />
    </View>
  )
}
