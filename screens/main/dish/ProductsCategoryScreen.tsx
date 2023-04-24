import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScreenInfo, Search, ProductList } from '../../../components';

export default function ProductsCategoryScreen() {
  return (
    <View style={styles.container}>
      <ScreenInfo titleScreen="Categoria de mariscos" showBack={true} />
      <Search placeholder="Que te gustaria comer hoy?" />
      <ProductList title="" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7f9',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
