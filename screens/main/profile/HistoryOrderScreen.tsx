import { CustomSafeAreaView, OrderList, ScreenInfo } from '../../../components';

export default function HistoryOrderScreen() {
  return (
    <CustomSafeAreaView>
      <ScreenInfo titleScreen="Historial de pedidos" showBack={true} />
      <OrderList isInOrderHistory={true} />
    </CustomSafeAreaView>
  );
}
