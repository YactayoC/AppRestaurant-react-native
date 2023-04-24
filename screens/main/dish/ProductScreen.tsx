import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFa from 'react-native-vector-icons/FontAwesome5';

import { ScreenInfo } from '../../../components';

export default function ProductScreen() {
  return (
    <View style={styles.container}>
      <ScreenInfo titleScreen="Detalles del plato" showBack={true} />

      <View style={styles.product}>
        <Image style={styles.product_image} source={require('../../../assets/images/dishes/main/main.jpg')} />
        <View style={styles.product_header}>
          <Text style={styles.product_name}>Ceviche Peruano</Text>
          <TouchableOpacity>
            <IconFa name="heart" size={25} color="red" solid />
          </TouchableOpacity>
        </View>
        <Text style={styles.product_description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare sem sed leo commodo tempor. Maecenas
          dapibus tempor erat id dignissim. Suspendisse quis rhoncus ante, ac congue leo. Sed in pretium risus, sed
          vehicula sem.
        </Text>
        <View style={styles.product_data}>
          <View style={styles.product_data_price}>
            <Text style={styles.product_data_price_money}>S/</Text>
            <Text style={styles.product_data_price_number}>8.00</Text>
          </View>
          <View style={styles.product_data_quantity}>
            <TouchableOpacity style={styles.cart_product_options_quantity_icon}>
              <Icon name="add" size={20} color="#000" />
            </TouchableOpacity>
            <Text>3</Text>
            <TouchableOpacity style={styles.cart_product_options_quantity_icon}>
              <Icon name="remove" size={20} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.product_button}>
          <Text style={styles.product_button_text}>Agregar al carrito</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7f9',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  product: {
    marginTop: 30,
    rowGap: 30,
  },

  product_image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },

  product_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  product_name: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  product_description: {
    fontSize: 18,
    color: '#6F6F6F',
    width: '90%',
  },

  product_data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  product_data_price: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },

  product_data_price_money: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: -5,
  },

  product_data_price_number: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },

  product_data_quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },

  cart_product_options_quantity_icon: {
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#DCDCDC',
    justifyContent: 'center',
    alignItems: 'center',
  },

  product_button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 10,
  },

  product_button_text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
