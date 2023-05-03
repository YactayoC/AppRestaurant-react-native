import { RouteProp, useRoute } from '@react-navigation/native';
import { useAtomValue } from 'jotai';

import ScreenInfo from '../../../components/ScreenInfo';
import ProductList from '../../../components/product/ProductList';
import { CustomSafeAreaView } from '../../../components';
import { productsAtom } from '../../../store';
import { ProductNativeStackParamList } from '../../../navigation/ProductNavigation';

export default function ProductsSearchScreen() {
  const route = useRoute<RouteProp<ProductNativeStackParamList, 'ProductsSearch'>>();
  const { valueSearch } = route.params;
  const { data, isLoading } = useAtomValue(productsAtom);
  const productsBySearch = data.filter((product) => product.name.toLowerCase().includes(valueSearch.toLowerCase()));

  return (
    <CustomSafeAreaView>
      <ScreenInfo titleScreen="Resultados de busqueda" showBack={true} />
      <ProductList title="" products={productsBySearch} isLoading={isLoading} />
    </CustomSafeAreaView>
  );
}
