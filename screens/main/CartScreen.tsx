import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ScreenInfo } from '../../components';
import { Colors } from '../../models/theme';

export default function CartScreen() {
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.container}>
      <ScreenInfo titleScreen="Carrito" />

      <ScrollView showsVerticalScrollIndicator={false} bounces={false} alwaysBounceVertical={false}>
        <View style={styles.carts_products}>
          <View style={styles.cart_product}>
            <Image style={styles.cart_product_image} source={require('../../assets/images/products/main/main.jpg')} />
            <View style={styles.cart_product_text}>
              <Text style={styles.cart_product_name}>Sopa de pescado y marisco peruana</Text>
              <View style={styles.cart_product_price}>
                <Text style={styles.cart_product_price_money}>S/</Text>
                <Text style={styles.cart_product_price_number}>8.00</Text>
              </View>
            </View>
            <View style={styles.cart_product_options}>
              <TouchableOpacity style={styles.cart_product_options_button}>
                <Text style={styles.cart_product_options_button_text}>Eliminar</Text>
              </TouchableOpacity>
              <View style={styles.cart_product_options_quantity}>
                <TouchableOpacity
                  style={styles.cart_product_options_quantity_icon}
                  onPress={() => setQuantity(quantity + 1)}
                >
                  <Icon name="add" size={20} color="#000" />
                </TouchableOpacity>
                <Text>{quantity}</Text>
                <TouchableOpacity
                  style={styles.cart_product_options_quantity_icon}
                  onPress={() => setQuantity(quantity - 1)}
                >
                  <Icon name="remove" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.cart_product}>
            <Image style={styles.cart_product_image} source={require('../../assets/images/products/main/main.jpg')} />
            <View style={styles.cart_product_text}>
              <Text style={styles.cart_product_name}>Sopa de pescado y marisco peruana</Text>
              <View style={styles.cart_product_price}>
                <Text style={styles.cart_product_price_money}>S/</Text>
                <Text style={styles.cart_product_price_number}>8.00</Text>
              </View>
            </View>
            <View style={styles.cart_product_options}>
              <TouchableOpacity style={styles.cart_product_options_button}>
                <Text style={styles.cart_product_options_button_text}>Eliminar</Text>
              </TouchableOpacity>
              <View style={styles.cart_product_options_quantity}>
                <TouchableOpacity style={styles.cart_product_options_quantity_icon}>
                  <Icon name="add" size={20} color="#000" />
                </TouchableOpacity>
                <Text>3</Text>
                <TouchableOpacity style={styles.cart_product_options_quantity_icon}>
                  <Icon name="remove" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.total}>
        <Text style={styles.total_text}>Total: </Text>
        <View style={styles.total_price}>
          <Text style={styles.total_price_money}>S/</Text>
          <Text style={styles.total_price_number}>50.00</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.pay}>
        <Text style={styles.pay_text}>Pagar ahora</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  carts_products: {
    rowGap: 20,
    marginTop: 30,
  },

  cart_product: {
    flexDirection: 'row',
    columnGap: 20,
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 10,
  },

  cart_product_image: {
    width: '30%',
    height: 100,
    borderRadius: 10,
  },

  cart_product_text: {
    width: '30%',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },

  cart_product_name: {
    fontSize: 14,
  },

  cart_product_price: {
    flexDirection: 'row',
    position: 'relative',
  },

  cart_product_price_money: {
    fontWeight: 'bold',
    position: 'absolute',
    top: -2,
    fontSize: 12,
  },

  cart_product_price_number: {
    fontWeight: 'bold',
    paddingLeft: 14,
    fontSize: 14,
  },

  cart_product_options: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  cart_product_options_button: {
    backgroundColor: Colors.black,
    width: '100%',
    padding: 10,
    borderRadius: 10,
  },

  cart_product_options_button_text: {
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  cart_product_options_quantity: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    columnGap: 8,
  },

  cart_product_options_quantity_icon: {
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.gray_2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  total: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    columnGap: 10,
    marginTop: 20,
  },

  total_text: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  total_price: {
    flexDirection: 'row',
    position: 'relative',
  },

  total_price_money: {
    fontWeight: 'bold',
    position: 'absolute',
    top: -2,
    fontSize: 16,
  },

  total_price_number: {
    fontWeight: 'bold',
    paddingLeft: 16,
    fontSize: 20,
  },

  pay: {
    backgroundColor: Colors.black,
    width: '100%',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },

  pay_text: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});
