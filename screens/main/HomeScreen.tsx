import { StyleSheet, View } from 'react-native';
import { ProductCategories, ProductList, ScreenInfo, Search } from '../../components';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScreenInfo titleScreen="Hola Sebastian 👋" />
      <Search placeholder="Que te gustaria comer hoy?" />
      <ProductCategories />
      <ProductList title="Platos principales" />
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