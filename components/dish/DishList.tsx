import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import IconFa from 'react-native-vector-icons/FontAwesome5';

interface Props {
  title: string;
  areProductsOnOffert?: boolean;
}

export default function DishList({ title, areProductsOnOffert = false }: Props) {
  return (
    <View style={[styles.dishes, { height: '100%' }]}>
      {title !== '' && <Text style={styles.dishes_title}>{title}</Text>}
      <ScrollView showsVerticalScrollIndicator={false} bounces={false} alwaysBounceVertical={false}>
        <View style={styles.dishes_main_container}>
          <View style={styles.dish_main}>
            <Image style={styles.dish_image} source={require('../../assets/images/dishes/main/main.jpg')} />
            <View style={styles.dish_content}>
              <Text style={styles.dish_name}>Sopa de pescado y marisco peruana</Text>
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
          </View>

          <View style={styles.dish_main}>
            <Image style={styles.dish_image} source={require('../../assets/images/dishes/main/main.jpg')} />
            <View style={styles.dish_content}>
              <Text style={styles.dish_name}>Sopa de pescado y marisco peruana</Text>
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
          </View>

          <View style={styles.dish_main}>
            <Image style={styles.dish_image} source={require('../../assets/images/dishes/main/main.jpg')} />
            <View style={styles.dish_content}>
              <Text style={styles.dish_name}>Sopa de pescado y marisco peruana</Text>
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
          </View>

          <View style={styles.dish_main}>
            <Image style={styles.dish_image} source={require('../../assets/images/dishes/main/main.jpg')} />
            <View style={styles.dish_content}>
              <Text style={styles.dish_name}>Sopa de pescado y marisco peruana</Text>
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
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  dishes: {
    flex: 1,
    rowGap: 15,
    marginTop: 30,
  },

  dishes_title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  dishes_main_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
