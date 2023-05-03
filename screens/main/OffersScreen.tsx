import { useAtomValue } from 'jotai';
import { CustomSafeAreaView, Modal, NotAuth, ProductList, ScreenInfo, Search } from '../../components';
import { authAtom, productsAtom } from '../../store';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function OffersScreen() {
  const products = useAtomValue(productsAtom);
  const auth = useAtomValue(authAtom);

  return (
    <CustomSafeAreaView>
      {auth.data?.client ? (
        <>
          <ScreenInfo titleScreen="Ofertas" />
          <Search placeholder="Busca platos en ofertas" />
          <ProductList
            title="Platos en oferta"
            products={products.data.filter((product) => product.inOffer)}
            areProductsOnOffert={true}
            isLoading={auth.isLoading}
          />
        </>
      ) : (
        <>
          <ScreenInfo titleScreen="Ofertas" />
          <NotAuth />
        </>
      )}
    </CustomSafeAreaView>
  );
}
