import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  placeholder: string;
}

export default function Search({ placeholder }: Props) {
  return (
    <View style={styles.search}>
      <Icon style={styles.search_icon} name="search-outline" size={20} color="#000" />
      <TextInput style={styles.search_input} placeholder={placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
