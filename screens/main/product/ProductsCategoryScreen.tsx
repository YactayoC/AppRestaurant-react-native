import { ScreenInfo, Search, ProductList, CustomSafeAreaView } from '../../../components';

export default function ProductsCategoryScreen() {
  return (
    <CustomSafeAreaView>
      <ScreenInfo titleScreen="Categoria de mariscos" showBack={true} />
      <Search placeholder="Que te gustaria comer hoy?" />
      <ProductList title="" />
    </CustomSafeAreaView>
  );
}
