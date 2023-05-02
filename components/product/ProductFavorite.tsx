import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import IconFa from 'react-native-vector-icons/FontAwesome5';

import { RootNativeStackParamList } from '../../navigation/RootNavigation';
import { Colors } from '../../models/theme';
import { Product as ProductI } from '../../models';

interface Props {
  product: ProductI;
}

export default function ProductFavorite({ product }: Props) {
  const navigation = useNavigation<NavigationProp<RootNativeStackParamList, 'Auth'>>();

  return (
    <TouchableOpacity
      style={styles.product_main}
      onPress={() =>
        navigation.navigate('ProductInternal', {
          screen: 'ProductDetail',
          params: {
            product: product,
          },
        })
      }
    >
      <Image style={styles.product_image} source={{ uri: product.image }} />
      <View style={styles.product_content}>
        <View style={styles.product_text}>
          <Text style={styles.product_name}>{product.name}</Text>
          <TouchableOpacity style={styles.product_favorite}>
            <IconFa name="heart" size={25} color="red" solid />
          </TouchableOpacity>
        </View>
        <View style={styles.product_data}>
          <View style={styles.product_price}>
            <Text style={styles.product_price_money}>S/</Text>
            <Text style={styles.product_price_number}>{product.price.toFixed(2)}</Text>
          </View>
          <TouchableOpacity style={styles.product_cart}>
            <IconFa name={'shopping-bag'} size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  product_main: {
    width: '100%',
    height: 'auto',
    marginBottom: 20,
  },
  product_image: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  product_content: {
    backgroundColor: Colors.white,
    padding: 10,
    rowGap: 10,
    height: 'auto',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  product_text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  product_favorite: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 50,
  },
  product_name: {
    width: '70%',
    fontSize: 18,
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
});
