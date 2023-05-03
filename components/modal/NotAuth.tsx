import { NavigationProp, useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { RootNativeStackParamList } from '../../navigation/RootNavigation';
import { Colors } from '../../models';

export default function NotAuth() {
  const navigation = useNavigation<NavigationProp<RootNativeStackParamList, 'Main'>>();

  return (
    <View style={styles.container}>
      <Text style={styles.text_error}>Debes iniciar sesión para acceder a esta vista</Text>
      <Image style={styles.image} source={require('../../assets/images/auth/not-auth.png')} />
      <TouchableOpacity
        style={styles.buttonBack}
        onPress={() => {
          navigation.navigate('Auth', { screen: 'Login' });
        }}
      >
        <Text style={styles.buttonBackText}>Iniciar Sesion</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    rowGap: 50,
    borderRadius: 10,
    flex: 1,
  },
  text_error: {
    fontSize: 18,
    textAlign: 'center',
  },
  image: {
    height: 100,
    width: 100,
  },
  buttonBack: {
    backgroundColor: Colors.black,
    padding: 10,
    borderRadius: 10,
  },
  buttonBackText: {
    color: Colors.text_white,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
