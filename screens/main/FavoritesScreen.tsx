import { StyleSheet, View } from 'react-native';

import { ProductFavoriteList, ScreenInfo, Search } from '../../components';
import { Colors } from '../../models/theme';

export default function FavoritsScreen() {
  const data = [
    { key: '1', name: 'Item 1' },
    { key: '2', name: 'Item 2' },
    { key: '3', name: 'Item 3' },
    { key: '4', name: 'Item 4' },
    { key: '5', name: 'Item 5' },
  ];

  return (
    <View style={styles.container}>
      <ScreenInfo titleScreen="Favoritos" />
      <Search placeholder="Busca tu plato favorito" />
      <ProductFavoriteList />
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
