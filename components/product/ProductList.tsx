import { FlatList, StyleSheet, Text, View } from 'react-native';

import Product from './Product';
import { products } from '../../products';

interface Props {
  title: string;
  areProductsOnOffert?: boolean;
}

export default function ProductList({ title, areProductsOnOffert = false }: Props) {
  return (
    <View style={styles.products}>
      {title !== '' && <Text style={styles.products_title}>{title}</Text>}

      <FlatList
        data={products}
        renderItem={({ item }) => <Product product={item} areProductsOnOffert={areProductsOnOffert} />}
        keyExtractor={(item) => item.name}
        style={{ flex: 1 }}
        nestedScrollEnabled={true}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
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
  products_title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
