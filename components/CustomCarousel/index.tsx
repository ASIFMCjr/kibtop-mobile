import Carousel from 'react-native-reanimated-carousel'
import {DEVICE_WIDTH, scaleSize} from '@/styles/mixins'
import {Dimensions, Image, StyleSheet, View} from 'react-native'
import PaginationDot from 'react-native-animated-pagination-dot'
import {colors} from '@/styles/colors'
import React, {useState} from 'react'
import {ImageSourcePropType} from 'react-native'


interface CustomCarouselProps {
  imageSource?: ImageSourcePropType
}
export const CustomCarousel = ({

  imageSource,

}: CustomCarouselProps) => {

  const [pageIndex, setPageIndex] = useState(0)
 
  return (
    <>
      <Carousel
        loop
        width={DEVICE_WIDTH}
        height={DEVICE_WIDTH / 1.3 }
        autoPlay={false}
        data={[...new Array(4).keys()]}
        scrollAnimationDuration={1000}
        autoPlayInterval={3000}
        onSnapToItem={index => setPageIndex(index)}
        renderItem={({index}) => (
          <View
            key={index}
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <Image
              source={imageSource}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        )}
      />
      <View style={{alignItems: 'center', bottom: scaleSize(40)}}>
        <PaginationDot
          activeDotColor={'black'}
          curPage={pageIndex}
          inactiveDotColor={colors.brightGray}
          sizeRatio={1.2}
          maxPage={4}
        />
      </View>
    </>
  )
}


export default CustomCarousel
