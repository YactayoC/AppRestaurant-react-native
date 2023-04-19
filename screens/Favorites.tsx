import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ScreenInfo, Search } from '../components';

export default function FavoritsScreen() {
  return (
    <View style={styles.container}>
      <ScreenInfo titleScreen="Favoritos" />
      <Search placeholder="Busca tu plato favorito" />

      <View style={styles.dishes}>
        <ScrollView
          style={styles.dishes_main_scroll}
          showsVerticalScrollIndicator={false}
          bounces={false}
          alwaysBounceVertical={false}
        >
          <View style={styles.dishes_main_container}>
            <View style={styles.dish_main}>
              <Image style={styles.dish_image} source={require('../assets/images/dishes/main/main.jpg')} />
              <View style={styles.dish_content}>
                <View style={styles.dish_text}>
                  <Text style={styles.dish_name}>Sopa de pescado y marisco peruana</Text>
                  <Icon style={styles.dish_heart} name="heart" size={30} color="red" />
                </View>
                <View style={styles.dish_data}>
                  <View style={styles.dish_price}>
                    <Text style={styles.dish_price_money}>S/</Text>
                    <Text style={styles.dish_price_number}>20.00</Text>
                  </View>
                  <Icon style={styles.dish_cart} name="cart-outline" size={20} color="#ffffff" />
                </View>
              </View>
            </View>

            <View style={styles.dish_main}>
              <Image style={styles.dish_image} source={require('../assets/images/dishes/main/main.jpg')} />
              <View style={styles.dish_content}>
                <View style={styles.dish_text}>
                  <Text style={styles.dish_name}>Sopa de pescado y marisco peruana</Text>
                  <Icon style={styles.dish_heart} name="heart" size={30} color="red" />
                </View>
                <View style={styles.dish_data}>
                  <View style={styles.dish_price}>
                    <Text style={styles.dish_price_money}>S/</Text>
                    <Text style={styles.dish_price_number}>20.00</Text>
                  </View>
                  <Icon style={styles.dish_cart} name="cart-outline" size={20} color="#ffffff" />
                </View>
              </View>
            </View>

            <View style={styles.dish_main}>
              <Image style={styles.dish_image} source={require('../assets/images/dishes/main/main.jpg')} />
              <View style={styles.dish_content}>
                <View style={styles.dish_text}>
                  <Text style={styles.dish_name}>Sopa de pescado y marisco peruana</Text>
                  <Icon style={styles.dish_heart} name="heart" size={30} color="red" />
                </View>
                <View style={styles.dish_data}>
                  <View style={styles.dish_price}>
                    <Text style={styles.dish_price_money}>S/</Text>
                    <Text style={styles.dish_price_number}>20.00</Text>
                  </View>
                  <Icon style={styles.dish_cart} name="cart-outline" size={20} color="#ffffff" />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7f9',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  dishes: {
    flexDirection: 'column',
    rowGap: 15,
    marginTop: 30,
    marginBottom: 30,
  },

  dishes_main_scroll: {
    flexDirection: 'column',
    marginBottom: 100,
  },

  dishes_main_container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: height - 530,
    rowGap: 15,
  },

  dish_main: {
    width: '100%',
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
    alignItems: 'center',
  },

  dish_name: {
    width: '70%',
    fontSize: 16,
  },

  dish_heart: {
    padding: 10,
    borderRadius: 50,
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
