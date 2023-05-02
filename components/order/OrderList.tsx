import { View, StyleSheet } from 'react-native';
import OrderHistory from './OrderHistory';
import OrderRecent from './OrderRecent';

interface Props {
  isInOrderHistory?: boolean;
}

export default function OrderList({ isInOrderHistory = true }: Props) {
  return (
    <View>
      {isInOrderHistory ? (
        <View style={styles.orders}>
          <OrderHistory isOrderSuccess={true} />
          <OrderHistory isOrderSuccess={false} />
        </View>
      ) : (
        <View style={styles.orders}>
          <OrderRecent isOrderKitchen={true} />
          <OrderRecent isOrderKitchen={false} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  orders: {
    marginTop: 30,
    borderRadius: 10,
    rowGap: 20,
    width: '100%',
  },
});
