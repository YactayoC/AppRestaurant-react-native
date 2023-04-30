import { CustomSafeAreaView, ProductCategories, ProductList, ScreenInfo, Search } from '../../components';

export default function OffersScreen() {
  return (
    <CustomSafeAreaView>
      <ScreenInfo titleScreen="Ofertas" isLogged={true} />
      <Search placeholder="Busca platos en ofertas" />
      {/* <ProductCategories /> */}
      <ProductList title="Platos en oferta" areProductsOnOffert={true} />
    </CustomSafeAreaView>
  );
}
