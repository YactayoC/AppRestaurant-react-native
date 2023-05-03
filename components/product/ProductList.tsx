import { FlatList, StyleSheet, Text, View } from 'react-native';

import Product from './Product';
import Loader from '../loader/Loader';
import { Colors, Product as ProductI } from '../../models';

interface Props {
  title: string;
  areProductsOnOffert?: boolean;
  products: ProductI[];
  isLoading: boolean;
}

export default function ProductList({ title, products, areProductsOnOffert = false, isLoading }: Props) {
  return (
    <View style={styles.products}>
      {title !== '' && <Text style={styles.products_title}>{title}</Text>}

      {!isLoading ? (
        products.length !== 0 ? (
          <FlatList
            data={products || null}
            renderItem={({ item }) => <Product product={item} areProductsOnOffert={areProductsOnOffert} />}
            keyExtractor={(item) => item.name}
            style={{ flex: 1 }}
            nestedScrollEnabled={true}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            bounces={false}
          />
        ) : (
          <Text style={styles.text_no_products}>No hay productos que mostrar</Text>
        )
      ) : (
        <Loader isLoading={true} isLoaderScreen={false} colorLoader="#bfe3ff" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  products: {
    flex: 1,
    rowGap: 15,
    marginTop: 30,
    width: '100%',
  },
  products_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
  },
  text_no_products: {
    color: Colors.black,
    fontSize: 18,
  },
});
