import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import IconFa from 'react-native-vector-icons/FontAwesome5';

import { RootStackParamList } from '../../navigation/RootNavigation';

interface Props {
  item: any;
}

export default function ProductFavorite({ item }: Props) {
  const navigation: StackNavigationProp<RootStackParamList> = useNavigation();

  return (
    <TouchableOpacity style={styles.dish_main} onPress={() => navigation.navigate('DishInternal', { screen: 'Dish' })}>
      <Image style={styles.dish_image} source={require('../../assets/images/dishes/main/main.jpg')} />
      <View style={styles.dish_content}>
        <View style={styles.dish_text}>
          <Text style={styles.dish_name}>Sopa de pescado y marisco peruana</Text>
          <TouchableOpacity style={styles.dish_favorite}>
            <IconFa name="heart" size={25} color="red" solid />
          </TouchableOpacity>
        </View>
        <View style={styles.dish_data}>
          <View style={styles.dish_price}>
            <Text style={styles.dish_price_money}>S/</Text>
            <Text style={styles.dish_price_number}>20.00</Text>
          </View>
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
    width: '100%',
    marginBottom: 20,
  },

  dish_image: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  dish_content: {
    backgroundColor: '#fff',
    padding: 10,
    rowGap: 10,
    height: 'auto',
  },

  dish_text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  dish_favorite: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
  },

  dish_name: {
    width: '70%',
    fontSize: 16,
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
});
