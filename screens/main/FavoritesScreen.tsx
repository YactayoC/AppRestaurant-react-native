import { CustomSafeAreaView, ProductFavoriteList, ScreenInfo, Search } from '../../components';

export default function FavoritsScreen() {
  return (
    <CustomSafeAreaView>
      <ScreenInfo titleScreen="Favoritos" />
      <Search placeholder="Busca tu plato favorito" />
      <ProductFavoriteList />
    </CustomSafeAreaView>
  );
}
