import { FlatList, StyleSheet, View } from 'react-native';

import { products } from '../../products';
import ProductFavorite from './ProductFavorite';

export default function ProductFavoriteList() {
  return (
    <View style={styles.products}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductFavorite product={item} />}
        keyExtractor={(item) => item.name}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        bounces={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  products: {
    flex: 1,
    rowGap: 15,
    marginTop: 30,
  },
  products_main_scroll: {
    flexDirection: 'column',
    marginBottom: 100,
  },
});
