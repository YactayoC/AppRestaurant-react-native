import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../models';

interface Props {
  isOrderSuccess?: boolean;
}

export default function OrderHistory({ isOrderSuccess = true }: Props) {
  return (
    <TouchableOpacity style={styles.order}>
      <View style={styles.order_data}>
        <Text style={styles.order_data_id}>Nº Pedido OR-242DS2</Text>
        <Text style={styles.order_data_product}>Sopa de pescado y marisco peruana</Text>
        <View style={styles.order_data_info}>
          <Text style={styles.order_data_quantity}>Cantidad: 3</Text>
          <View style={styles.order_data_price}>
            <Text style={styles.order_data_price_total}>Total: </Text>
            <View>
              <Text style={styles.order_data_price_money}>S/</Text>
              <Text style={styles.order_data_price_number}>12.00</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.info}>
        {isOrderSuccess ? (
          <View style={styles.info_state_success}>
            <Text style={styles.info_state_text}>Entregado</Text>
          </View>
        ) : (
          <View style={styles.info_state_canceled}>
            <Text style={styles.info_state_text}>Cancelado</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  order: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    padding: 10,
  },
  order_data: {
    rowGap: 10,
    width: '60%',
  },
  order_data_id: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.text_gray,
  },
  order_data_product: {
    fontSize: 14,
  },
  order_data_info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  order_data_quantity: {
    fontSize: 14,
  },
  order_data_price: {
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'space-between',
  },
  order_data_price_total: {
    fontSize: 14,
  },
  order_data_price_money: {
    fontSize: 14,
    position: 'absolute',
    top: -3,
  },
  order_data_price_number: {
    fontSize: 14,
    paddingLeft: 14,
  },
  info: {
    width: '40%',
    alignItems: 'flex-end',
  },
  info_state_success: {
    backgroundColor: Colors.green,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  info_state_canceled: {
    backgroundColor: Colors.red,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  info_state_text: {
    color: Colors.text_white,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
