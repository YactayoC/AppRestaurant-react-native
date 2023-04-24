import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ProductFavorite from './ProductFavorite';

export default function ProductFavoriteList() {
  const data = [
    { key: '1', name: 'Item 1' },
    { key: '2', name: 'Item 2' },
    { key: '3', name: 'Item 3' },
    { key: '4', name: 'Item 4' },
    { key: '5', name: 'Item 5' },
  ];

  return (
    <View style={styles.dishes}>
      <FlatList
        data={data}
        renderItem={(item) => <ProductFavorite item={item} />}
        keyExtractor={(item) => item.key.toString()}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        bounces={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dishes: {
    flex: 1,
    rowGap: 15,
    marginTop: 30,
  },

  dishes_main_scroll: {
    flexDirection: 'column',
    marginBottom: 100,
  },
});
