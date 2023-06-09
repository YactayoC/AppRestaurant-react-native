import { FlatList, StyleSheet, Text, View } from 'react-native';

import { Category as CategoryI, Colors } from '../../models';
import Loader from '../loader/Loader';
import Category from './Category';

interface Props {
  categories: CategoryI[];
  isLoading: boolean;
}

export default function CategoryList({ categories, isLoading }: Props) {
  return (
    <View style={styles.category}>
      <Text style={styles.category_title}>Categorias</Text>
      <View style={styles.category_card_container}>
        {!isLoading ? (
          categories.length !== 0 ? (
            <FlatList
              data={categories}
              renderItem={({ item }) => <Category category={item} />}
              keyExtractor={(item) => item.category}
              style={{ flex: 1 }}
              horizontal={true}
              nestedScrollEnabled={true}
              showsHorizontalScrollIndicator={false}
              bounces={false}
            />
          ) : (
            <Text style={styles.text_no_categories}>No hay categorias que mostrar</Text>
          )
        ) : (
          <Loader isLoading={true} isLoaderScreen={false} colorLoader="#bfe3ff" />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    flexDirection: 'column',
    rowGap: 15,
    marginTop: 30,
  },
  category_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
  },
  category_card_container: {
    flexDirection: 'row',
    width: '100%',
  },
  text_no_categories: {
    color: Colors.black,
    fontSize: 18,
  },
});
