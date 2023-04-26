import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { RootNativeStackParamList } from '../../navigation/RootNavigation';

export default function ProductCategories() {
  const navigation = useNavigation<NavigationProp<RootNativeStackParamList, 'Auth'>>();

  return (
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
          <TouchableOpacity
            style={styles.category_card_green}
            onPress={() => navigation.navigate('ProductInternal', { screen: 'ProductsCategory' })}
          >
            <Text style={styles.category_name}>Mariscos</Text>
            <Image
              style={styles.category_image}
              source={require('../../assets/images/products/category/mariscos.jpeg')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.category_card_pink}>
            <Text style={styles.category_name}>Fuentes</Text>
            <Image
              style={styles.category_image}
              source={require('../../assets/images/products/category/fuentes.jpg')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.category_card_blue}>
            <Text style={styles.category_name}>Porciones</Text>
            <Image
              style={styles.category_image}
              source={require('../../assets/images/products/category/porcion.jpg')}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
