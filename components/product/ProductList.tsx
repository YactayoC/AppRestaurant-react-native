import { FlatList, StyleSheet, Text, View } from 'react-native';
import Product from './Product';

interface Props {
  title: string;
  areProductsOnOffert?: boolean;
}

export default function ProductList({ title, areProductsOnOffert = false }: Props) {
  const data = [
    { key: '1', name: 'Item 1' },
    { key: '2', name: 'Item 2' },
    { key: '3', name: 'Item 3' },
    { key: '4', name: 'Item 4' },
    { key: '5', name: 'Item 5' },
  ];

  return (
    <View style={styles.dishes}>
      {title !== '' && <Text style={styles.dishes_title}>{title}</Text>}

      <FlatList
        data={data}
        renderItem={(item) => <Product item={item} areProductsOnOffert={true} />}
        keyExtractor={(item) => item.key.toString()}
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
  dishes: {
    flex: 1,
    rowGap: 15,
    marginTop: 30,
  },

  dishes_title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
