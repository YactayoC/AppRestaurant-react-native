import { RouteProp, useRoute } from '@react-navigation/native';
import { useAtomValue } from 'jotai';

import { ScreenInfo, Search, ProductList, CustomSafeAreaView } from '../../../components';
import { ProductNativeStackParamList } from '../../../navigation/ProductNavigation';
import { productsAtom } from '../../../store';

export default function ProductsCategoryScreen() {
  const { data, isLoading } = useAtomValue(productsAtom);
  const route = useRoute<RouteProp<ProductNativeStackParamList, 'ProductsCategory'>>();
  const { category } = route.params;

  return (
    <CustomSafeAreaView>
      <ScreenInfo titleScreen="Categoria de mariscos" showBack={true} />
      <Search placeholder="Que te gustaria comer hoy?" />
      <ProductList title="" products={data.filter((product) => product.category === category)} isLoading={isLoading} />
    </CustomSafeAreaView>
  );
}
