import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import ReactNativeModal from 'react-native-modal';

import { RootNativeStackParamList } from '../../navigation/RootNavigation';
import { Colors } from '../../models';

interface Props {
  isVisible: boolean;
}

export default function Modal({ isVisible }: Props) {
  const navigation = useNavigation<NavigationProp<RootNativeStackParamList, 'Main'>>();

  return (
    <ReactNativeModal
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      isVisible={isVisible}
      backdropOpacity={0.5}
      onBackdropPress={() => {
        navigation.navigate('Main', { screen: 'Home' });
      }}
    >
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: 20,
          rowGap: 20,
          borderRadius: 10,
          width: '80%',
        }}
      >
        <Text style={{ fontSize: 18, textAlign: 'center' }}>Debes iniciar sesión para acceder a esta vista</Text>
        <Image
          style={{ height: 100, width: 100 }}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/7326/7326046.png' }}
        />
        <TouchableOpacity
          style={{ backgroundColor: Colors.black, padding: 10, borderRadius: 10 }}
          onPress={() => {
            navigation.navigate('Auth', { screen: 'Login' });
          }}
        >
          <Text style={{ color: Colors.text_white, fontWeight: 'bold', fontSize: 18 }}>Iniciar Sesion</Text>
        </TouchableOpacity>
      </View>
    </ReactNativeModal>
  );
}
