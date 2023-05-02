import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFa from 'react-native-vector-icons/FontAwesome5';

import { CustomSafeAreaView, ScreenInfo } from '../../../components';
import { Colors } from '../../../models/theme';
import { ProductNativeStackParamList } from '../../../navigation/ProductNavigation';

export default function ProductScreen() {
  const route = useRoute<RouteProp<ProductNativeStackParamList, 'ProductDetail'>>();
  const { product } = route.params;

  return (
    <CustomSafeAreaView>
      <ScreenInfo titleScreen="Detalles del plato" showBack={true} />
      <View style={styles.product}>
        <Image style={styles.product_image} source={{ uri: product.image }} />
        <View style={styles.product_header}>
          <Text style={styles.product_name}>{product.name}</Text>
          <TouchableOpacity>
            <IconFa name="heart" size={25} color="red" solid />
          </TouchableOpacity>
        </View>
        <Text style={styles.product_description}>{product.description}</Text>
        <View style={styles.product_data}>
          <View style={styles.product_data_price}>
            <Text style={styles.product_data_price_money}>S/</Text>
            <Text style={styles.product_data_price_number}>{product.price.toFixed(2)}</Text>
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
    </CustomSafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    textTransform: 'capitalize',
  },

  product_description: {
    fontSize: 18,
    color: Colors.text_description,
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
    borderColor: Colors.gray_2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  product_button: {
    backgroundColor: Colors.black,
    paddingVertical: 12,
    borderRadius: 10,
  },

  product_button_text: {
    color: Colors.text_white,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
