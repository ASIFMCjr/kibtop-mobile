import React from 'react'
import {FlatList, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import commonStyles from '@/styles/commonStyles'
import {styles} from '@/screens/ArchiveScreen/styles'
import {ProductItem} from '@/components/ProductItem'
import {scaleSize} from '@/styles/mixins'
import {colors} from '@/styles/colors'

const ArchiveScreen = () => {
  const renderItem = () => (
    <ProductItem
      iconSource={require('@/assets/icons/trash-ws.png')}
      onPressIcon={() => null}
      onPress={() => null}
      containerStyles={{marginBottom: 5, marginRight: scaleSize(15)}}
      hasMask
      iconTintColor={colors.red}
    />
  )
  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          data={[1, 2, 3, 4, 5, 6, 7, 8].slice()}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: 120}}
        />
      </View>
    </SafeAreaView>
  )
}

export default ArchiveScreen
