import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function DishCategories() {
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