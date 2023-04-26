import { StyleSheet, View } from 'react-native';

import { ProductCategories, ProductList, ScreenInfo, Search } from '../../components';
import { Colors } from '../../models/theme';

export default function OffersScreen() {
  return (
    <View style={styles.container}>
      <ScreenInfo titleScreen="Ofertas" isLogged={true} />

      <Search placeholder="Busca platos en ofertas" />
      <ProductCategories />
      <ProductList title="Platos en oferta" areProductsOnOffert={true} />
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
