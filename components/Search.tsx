import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Colors } from '../models/theme';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootNativeStackParamList } from '../navigation/RootNavigation';

interface Props {
  placeholder: string;
}

export default function Search({ placeholder }: Props) {
  const navigation = useNavigation<NavigationProp<RootNativeStackParamList, 'Main'>>();
  const [valueSearch, setValueSearch] = useState('');

  const onChange = (text: string) => {
    setValueSearch(text);
  };

  const onSubmitSearch = () => {
    navigation.navigate('ProductInternal', { screen: 'ProductsSearch', params: { valueSearch } });
  };

  return (
    <View style={styles.search}>
      <Icon style={styles.search_icon} name="search-outline" size={20} color="#000" onPress={onSubmitSearch} />
      <TextInput
        style={styles.search_input}
        placeholder={placeholder}
        value={valueSearch}
        onChangeText={onChange}
        onSubmitEditing={onSubmitSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    width: '100%',
    backgroundColor: Colors.gray_3,
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
});
