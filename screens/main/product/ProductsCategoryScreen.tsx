import { StyleSheet, View } from 'react-native';

import { ScreenInfo, Search, ProductList } from '../../../components';
import { Colors } from '../../../models/theme';

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
    backgroundColor: Colors.gray,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
