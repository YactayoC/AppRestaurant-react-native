import { CustomSafeAreaView, ProductCategories, ProductList, ScreenInfo, Search } from '../../components';

export default function HomeScreen() {
  return (
    <CustomSafeAreaView>
      <ScreenInfo titleScreen="Hola Sebastian 👋" />
      <Search placeholder="Que te gustaria comer hoy?" />
      <ProductCategories />
      <ProductList title="Platos principales" />
    </CustomSafeAreaView>
  );
}
