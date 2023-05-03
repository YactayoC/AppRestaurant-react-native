import { useEffect } from 'react';
import { useAtomValue } from 'jotai';

import { CustomSafeAreaView, CategoryList, ProductList, ScreenInfo, Search } from '../../components';
import { useProduct } from '../../hooks/useProduct';
import { categoriesAtom, productsAtom, authAtom } from '../../store';

export default function HomeScreen() {
  const { handleGetProducts, handleGetCategories } = useProduct();
  const { data, isLoading } = useAtomValue(productsAtom);
  const categories = useAtomValue(categoriesAtom);
  const auth = useAtomValue(authAtom);

  useEffect(() => {
    onGetProducts();
    onGetCategories();
  }, []);

  const onGetProducts = async () => {
    await handleGetProducts();
  };

  const onGetCategories = async () => {
    await handleGetCategories();
  };

  return (
    <CustomSafeAreaView>
      <ScreenInfo titleScreen={`Hola ${auth.data?.client ? auth.data?.client.fullname : ''} 👋`} />
      <Search placeholder="Que te gustaria comer hoy?" />
      <CategoryList categories={categories} isLoading={isLoading} />
      <ProductList title="Platos principales" products={data} isLoading={isLoading} />
    </CustomSafeAreaView>
  );
}
