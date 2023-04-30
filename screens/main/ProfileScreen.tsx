import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { CustomSafeAreaView, ScreenInfo } from '../../components';
import { Colors } from '../../models/theme';
import { RootNativeStackParamList } from '../../navigation/RootNavigation';

export default function ProfileScreen() {
  const navigation = useNavigation<NavigationProp<RootNativeStackParamList>>();

  return (
    <CustomSafeAreaView>
      <ScreenInfo titleScreen="Perfil" showProfileImage={false} />
      <View style={styles.profile}>
        <View style={styles.profile_option}>
          <Image
            style={styles.profile_image}
            source={{ uri: 'https://i.ytimg.com/vi/kpqWRbRl-Ok/maxresdefault.jpg' }}
          />
          <TouchableOpacity
            style={styles.profile_edit}
            onPress={() => navigation.navigate('ProfileInternal', { screen: 'Setting' })}
          >
            <MaterialIcon name={'pencil'} size={25} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.profile_name}>Sebastian Yactayo</Text>
      </View>

      <View style={styles.options}>
        <TouchableOpacity
          style={styles.options_element}
          onPress={() => navigation.navigate('ProfileInternal', { screen: 'HistoryOrder' })}
        >
          <Icon name={'receipt-outline'} size={30} color="#000" />
          <Text style={styles.options_element_text}>Historial de pedidos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.options_element}
          onPress={() => navigation.navigate('ProfileInternal', { screen: 'Order' })}
        >
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
    </CustomSafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: Colors.black,
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
