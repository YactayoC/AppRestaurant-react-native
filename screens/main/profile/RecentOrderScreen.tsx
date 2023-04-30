import { CustomSafeAreaView, OrderList, ScreenInfo } from '../../../components';

export default function Order() {
  return (
    <CustomSafeAreaView>
      <ScreenInfo titleScreen="Pedido recientes" showBack={true} />
      <OrderList isInOrderHistory={false} />
    </CustomSafeAreaView>
  );
}
