import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ScreenInfo } from '../components';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScreenInfo titleScreen="Hola Sebastian 👋" />

      <View style={styles.search}>
        <Icon style={styles.search_icon} name="search-outline" size={20} color="#000" />
        <TextInput style={styles.search_input} placeholder="Que te gustaria comer hoy?" />
      </View>

      <View style={styles.category}>
        <Text style={styles.category_title}>Categorias</Text>
        <ScrollView
          style={styles.categories_scroll}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          alwaysBounceHorizontal={false}
        >
          <View style={styles.category_card_container}>
            <View style={styles.category_card_green}>
              <Text style={styles.category_name}>Mariscos</Text>
              <Image style={styles.category_image} source={require('../assets/images/dishes/category/mariscos.jpeg')} />
            </View>
            <View style={styles.category_card_pink}>
              <Text style={styles.category_name}>Fuentes</Text>
              <Image style={styles.category_image} source={require('../assets/images/dishes/category/fuentes.jpg')} />
            </View>
            <View style={styles.category_card_blue}>
              <Text style={styles.category_name}>Porciones</Text>
              <Image style={styles.category_image} source={require('../assets/images/dishes/category/porcion.jpg')} />
            </View>
            <View style={styles.category_card_green}>
              <Text style={styles.category_name}>xariscos2</Text>
              <Image style={styles.category_image} source={require('../assets/images/dishes/category/mariscos.jpeg')} />
            </View>
            <View style={styles.category_card_blue}>
              <Text style={styles.category_name}>Jariscos3</Text>
              <Image style={styles.category_image} source={require('../assets/images/dishes/category/mariscos.jpeg')} />
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.dishes}>
        <Text style={styles.dishes_title}>Platos principales</Text>
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
                <Text style={styles.dish_name}>Sopa de pescado y marisco peruana</Text>
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
                <Text style={styles.dish_name}>Sopa de pescado y marisco peruana</Text>
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
                <Text style={styles.dish_name}>Sopa de pescado y marisco peruana</Text>
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
                <Text style={styles.dish_name}>Sopa de pescado y marisco peruana</Text>
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
                <Text style={styles.dish_name}>Sopa de pescado y marisco peruana</Text>
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
                <Text style={styles.dish_name}>Sopa de pescado y marisco peruana</Text>
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

  search: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    position: 'relative',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 30,
  },

  search_icon: {
    position: 'absolute',
    left: 10,
  },

  search_input: {
    paddingLeft: 40,
    fontSize: 16,
    paddingVertical: 12,
  },

  category: {
    flexDirection: 'column',
    rowGap: 15,
    marginTop: 30,
  },

  category_title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  categories_scroll: {
    flexDirection: 'row',
  },

  category_card_container: {
    flexDirection: 'row',
    width: '100%',
  },

  category_card_green: {
    backgroundColor: '#eaf9e6',
    width: 140,
    height: 95,
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    marginRight: 20,
  },

  category_card_pink: {
    backgroundColor: '#ffe8ee',
    width: 140,
    height: 95,
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    marginRight: 20,
  },

  category_card_blue: {
    backgroundColor: '#e6edfa',
    width: 140,
    height: 95,
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    marginRight: 20,
  },

  category_name: {
    fontSize: 14,
    fontWeight: '600',
  },

  category_image: {
    width: 90,
    height: 90,
    borderRadius: 50,
    position: 'absolute',
    bottom: -25,
    right: -25,
  },

  dishes: {
    flexDirection: 'column',
    rowGap: 15,
    marginTop: 30,
    marginBottom: 30,
  },

  dishes_title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  dishes_main_scroll: {
    flexDirection: 'column',
  },

  dishes_main_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: height - 530,
    rowGap: 15,
  },

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
});
