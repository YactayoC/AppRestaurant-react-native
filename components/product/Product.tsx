import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import IconFeather from 'react-native-vector-icons/Feather';

import { RootNativeStackParamList } from '../../navigation/RootNavigation';
import { Product as ProductI } from '../../models';
import { Colors } from '../../models/theme';

interface Props {
  product: ProductI;
  areProductsOnOffert?: boolean;
}

export default function Product({ product, areProductsOnOffert = false }: Props) {
  const navigation = useNavigation<NavigationProp<RootNativeStackParamList, 'ProductInternal'>>();

  return (
    <TouchableOpacity
      style={styles.product_main}
      onPress={() => navigation?.navigate('ProductInternal', { screen: 'ProductDetail', params: { product } })}
    >
      <Image style={styles.product_image} source={{ uri: product.image }} />
      <View style={styles.product_content}>
        <Text style={styles.product_name}>{product.name}</Text>
        <View style={styles.product_data}>
          {areProductsOnOffert ? (
            <View style={styles.product_price_offert}>
              <View style={styles.product_price_real}>
                <Text style={styles.product_price_real_money}>S/</Text>
                <Text style={styles.product_price_real_number}>{product.price}</Text>
              </View>
              <View style={styles.product_price_discount}>
                <Text style={styles.product_price_discount_money}>S/</Text>
                <Text style={styles.product_price_discount_number}>{product.offerPrice}</Text>
              </View>
            </View>
          ) : (
            <View style={styles.product_price}>
              <Text style={styles.product_price_money}>S/</Text>
              <Text style={styles.product_price_number}>{product.price.toFixed(2)}</Text>
            </View>
          )}

          <TouchableOpacity style={styles.product_cart}>
            <IconFeather name={'shopping-bag'} size={20} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  product_main: {
    width: '48%',
    marginBottom: 15,
  },
  product_content: {
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    padding: 10,
    rowGap: 10,
    height: 110,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  product_name: {
    width: '90%',
    fontSize: 16,
    height: 40,
    textTransform: 'capitalize',
    color: Colors.black,
  },
  product_image: {
    flex: 1,
    height: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  product_data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  product_price: {
    flexDirection: 'row',
  },
  product_price_money: {
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 4,
    marginTop: -2,
  },
  product_price_number: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  product_cart: {
    backgroundColor: Colors.black,
    padding: 10,
    borderRadius: 50,
    width: 40,
  },
  // product price offert
  product_price_offert: {
    flexDirection: 'column',
  },
  product_price_real: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  product_price_real_money: {
    fontSize: 8,
    marginLeft: 4,
    marginTop: -2,
    textDecorationLine: 'line-through',
  },
  product_price_real_number: {
    fontSize: 10,
    textDecorationLine: 'line-through',
  },
  product_price_discount: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
  },
  product_price_discount_money: {
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 4,
    marginTop: -2,
  },
  product_price_discount_number: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
