import { useAtomValue } from 'jotai';
import { CustomSafeAreaView, Modal, ProductList, ScreenInfo, Search } from '../../components';
import { authAtom, productsAtom } from '../../store';

export default function OffersScreen() {
  const { data, isLoading } = useAtomValue(productsAtom);
  const user = useAtomValue(authAtom);

  return (
    <CustomSafeAreaView>
      <ScreenInfo titleScreen="Ofertas" />
      <Search placeholder="Busca platos en ofertas" />
      <ProductList
        title="Platos en oferta"
        products={data.filter((product) => product.inOffer)}
        areProductsOnOffert={true}
        isLoading={isLoading}
      />

      <Modal isVisible={!user?.client} />
    </CustomSafeAreaView>
  );
}
