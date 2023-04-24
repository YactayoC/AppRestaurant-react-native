import { Image, Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ScreenInfo } from '../../components';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScreenInfo titleScreen="Perfil" showProfileImage={false} />
      <View style={styles.profile}>
        <View style={styles.profile_option}>
          <Image style={styles.profile_image} source={require('../../assets/images/profile/profile.webp')} />
          <TouchableOpacity style={styles.profile_edit}>
            <Icon name={'pencil'} size={25} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.profile_name}>Sebastian Yactayo</Text>
      </View>

      <View style={styles.options}>
        <TouchableOpacity style={styles.options_element}>
          <Icon name={'receipt-outline'} size={30} color="#000" />
          <Text style={styles.options_element_text}>Historial de pedidos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options_element}>
          <Icon name={'cube-outline'} size={30} color="#000" />
          <Text style={styles.options_element_text}>Pedidos recientes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options_element}>
          <Icon name={'call-outline'} size={30} color="#000" />
          <Text style={styles.options_element_text}>Contactanos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options_element}>
          <Icon name={'exit-outline'} size={30} color="#000" />
          <Text style={styles.options_element_text}>Salir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7f9',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  profile: {
    position: 'relative',
    alignItems: 'center',
    marginTop: 30,
  },

  profile_option: {
    alignItems: 'center',
  },

  profile_image: {
    width: 180,
    height: 180,
    borderRadius: 100,
  },

  profile_edit: {
    backgroundColor: '#000',
    position: 'absolute',
    borderRadius: 100,
    padding: 10,
    bottom: -20,
    zIndex: 1,
  },

  profile_name: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 25,
  },

  options: {
    marginTop: 30,
    rowGap: 30,
  },

  options_element: {
    flexDirection: 'row',
    columnGap: 15,
    alignItems: 'center',
  },

  options_element_text: {
    fontSize: 18,
  },
});
