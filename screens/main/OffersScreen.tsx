import { useAtomValue } from 'jotai';
import { CustomSafeAreaView, Modal, ProductList, ScreenInfo, Search } from '../../components';
import { authAtom, productsAtom } from '../../store';

export default function OffersScreen() {
  const products = useAtomValue(productsAtom);
  const user = useAtomValue(authAtom);

  return (
    <CustomSafeAreaView>
      <ScreenInfo titleScreen="Ofertas" isLogged={true} />
      <Search placeholder="Busca platos en ofertas" />
      <ProductList
        title="Platos en oferta"
        products={products.filter((product) => product.inOffer)}
        areProductsOnOffert={true}
      />

      <Modal isVisible={!user?.client} />
    </CustomSafeAreaView>
  );
}
