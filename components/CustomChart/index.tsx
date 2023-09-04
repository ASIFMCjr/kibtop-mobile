import {colors} from '@/styles/colors'
import React from 'react'
import {Dimensions, Text, View} from 'react-native'
import {BarChart} from 'react-native-chart-kit'
import {useTranslation} from 'react-i18next'

const CustomChart = ({title}) => {
  const {t} = useTranslation()
  return (
    <View>
      <Text style={{fontSize: 24, fontWeight: '700'}}>{title}</Text>
      <BarChart
        data={{
          labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
          datasets: [
            {
              data: [100, 10, 50, 70, 80, 55],
            },
          ],
        }}
        width={Dimensions.get('window').width - 20}
        height={220}
        fromZero
        segments={0}
        withHorizontalLabels={false}
        withVerticalLabels
        showValuesOnTopOfBars
        showBarTops={false}
        chartConfig={{
          backgroundGradientFrom: colors.white,
          backgroundGradientTo: colors.white,
          fillShadowGradientFromOpacity: 0.4,
          fillShadowGradientToOpacity: 0.4,
          barPercentage: 1.2,
          barRadius: 8,
          color: () => 'rgba(122, 177, 255, 0.4)',
          style: {},
          propsForDots: {},
        }}
        style={{
          marginVertical: 8,
          paddingRight: -10,
        }}
      />
    </View>
  )
}

export default CustomChart
