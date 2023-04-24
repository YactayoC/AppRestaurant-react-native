import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import IconFa from 'react-native-vector-icons/FontAwesome5';

import { RootStackParamList } from '../../navigation/RootNavigation';

interface Props {
  areProductsOnOffert?: boolean;
  item: any;
}

export default function Product({ areProductsOnOffert = false, item }: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'DishInternal'>>();

  return (
    <TouchableOpacity style={styles.dish_main} onPress={() => navigation?.navigate('DishInternal', { screen: 'Dish' })}>
      <Image style={styles.dish_image} source={require('../../assets/images/dishes/main/main.jpg')} />
      <View style={styles.dish_content}>
        <Text style={styles.dish_name}>Sopa de pescado y marisco peruanax</Text>
        <View style={styles.dish_data}>
          {areProductsOnOffert ? (
            <View style={styles.dish_price_offert}>
              <View style={styles.dish_price_real}>
                <Text style={styles.dish_price_real_money}>S/</Text>
                <Text style={styles.dish_price_real_number}>20.00</Text>
              </View>
              <View style={styles.dish_price_discount}>
                <Text style={styles.dish_price_discount_money}>S/</Text>
                <Text style={styles.dish_price_discount_number}>10.00</Text>
              </View>
            </View>
          ) : (
            <View style={styles.dish_price}>
              <Text style={styles.dish_price_money}>S/</Text>
              <Text style={styles.dish_price_number}>20.00</Text>
            </View>
          )}

          <TouchableOpacity style={styles.dish_cart}>
            <IconFa name={'shopping-bag'} size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  dish_main: {
    width: '48%',
  },

  dish_content: {
    backgroundColor: '#fff',
    padding: 10,
    rowGap: 10,
  },

  dish_name: {
    width: '90%',
    fontSize: 16,
  },

  dish_image: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  dish_data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dish_price: {
    flexDirection: 'row',
  },

  dish_price_money: {
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 4,
    marginTop: -2,
  },

  dish_price_number: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  dish_cart: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 50,
  },

  // Dish price offert
  dish_price_offert: {
    flexDirection: 'column',
  },

  dish_price_real: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dish_price_real_money: {
    fontSize: 8,
    marginLeft: 4,
    marginTop: -2,
    textDecorationLine: 'line-through',
  },

  dish_price_real_number: {
    fontSize: 10,
    textDecorationLine: 'line-through',
  },

  dish_price_discount: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
  },

  dish_price_discount_money: {
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 4,
    marginTop: -2,
  },

  dish_price_discount_number: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
