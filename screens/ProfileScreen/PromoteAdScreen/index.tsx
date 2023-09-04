import React from 'react'

import {ScrollView} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import commonStyles from '@/styles/commonStyles'
import PromoteAdView from '@/screens/Components/PromoteAdView'

const PromoteAdScreen = () => {
  return (
    <SafeAreaView edges={['left', 'right']} style={commonStyles.container}>
      <ScrollView
        style={{padding: 20, borderRadius: 10}}
        contentContainerStyle={{paddingBottom: 120}}
        showsVerticalScrollIndicator={false}>
        <PromoteAdView />
      </ScrollView>
    </SafeAreaView>
  )
}

export default PromoteAdScreen
