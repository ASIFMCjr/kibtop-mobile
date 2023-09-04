import React from 'react';
import { ScrollView, View } from 'react-native';

import { MainScreenHeader } from '../MainScreen/components/Header';
import { ProductItem } from '@/components/ProductItem';


interface Props {}

export const AddAdvertsScreen: React.FC<Props> = ({}) => {
  return (
    <View >
        <MainScreenHeader/>

        <ProductItem />

      </View>
  );
};

