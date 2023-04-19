import { StyleSheet, View } from 'react-native';
import { DishCategories, Dishes, ScreenInfo, Search } from '../components';

export default function Offers() {
  return (
    <View style={styles.container}>
      <ScreenInfo titleScreen="Ofertas" />

      <Search placeholder="Busca platos en ofertas" />
      <DishCategories />
      <Dishes title="Platos en oferta" areProductsOnOffert={true} />
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
