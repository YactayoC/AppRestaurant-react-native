import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Category as CategoryI, Colors } from '../../models';
import { RootNativeStackParamList } from '../../navigation/RootNavigation';

interface Props {
  category: CategoryI;
}

export default function Category({ category }: Props) {
  const navigation = useNavigation<NavigationProp<RootNativeStackParamList, 'ProductInternal'>>();

  return (
    <TouchableOpacity
      style={styles.category_card_blue}
      onPress={() =>
        navigation.navigate('ProductInternal', {
          screen: 'ProductsCategory',
          params: { category: category.category },
        })
      }
    >
      <Text style={styles.category_name}>{category.category}</Text>
      <Image style={styles.category_image} source={{ uri: category.image }} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  category_card_blue: {
    backgroundColor: Colors.light_blue,
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
    color: Colors.black,
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
